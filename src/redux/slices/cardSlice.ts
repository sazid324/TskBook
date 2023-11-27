// Library imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import secureLocalStorage from "react-secure-storage";

// Instance imports
import { NoteInstance } from "@/instance/DataInstance";

// Interfaces
interface CardInterface {
  _id: number;
  userId: string;
  headerValue: string;
  bodyValue: string;
  files: string[];
  color: string;
}

interface StateInterface {
  cardData: any;
  loading: boolean;
  message: any;
}

// API data
export const apiData: any = createAsyncThunk(
  "notes",
  async (_, { rejectWithValue }) => {
    try {
      const storedValue: any = await NoteInstance.get("/read/");
      return storedValue.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Redux slice
const cardSlice: any = createSlice({
  name: "CardSlice",
  initialState: {
    cardData: [],
    loading: false,
    message: null,
  } as StateInterface,
  reducers: {
    addCard: (state) => {
      // Getting decrypted data from local storage
      const decryptedUserData: any = secureLocalStorage.getItem("UserData");

      const decryptedUserDataObject = JSON.parse(decryptedUserData);

      // Creating new card object
      const newCardData: CardInterface = {
        _id: Date.now() + Math.floor(Math.random() * 78),
        userId: decryptedUserDataObject.user_id,
        headerValue: "",
        bodyValue: "",
        files: [],
        color: "#FFFFFF",
      };

      const newCard: any = [...state.cardData, newCardData];

      // Saving data to database
      NoteInstance.post("/add/", newCardData);

      state.cardData = newCard;
    },

    deleteCard: (state, action) => {
      const deletedCardId: string = state.cardData[action.payload]._id;
      const cards: any = [...state.cardData];
      cards.splice(action.payload, 1);

      // Deleting data from database
      NoteInstance.delete(`/delete/?_id=${deletedCardId}`);

      state.cardData = cards;
    },

    saveCard: (state, action) => {
      // Getting decrypted data from local storage
      const decryptedUserData: any = secureLocalStorage.getItem("UserData");

      const decryptedUserDataObject = JSON.parse(decryptedUserData);

      // Creating new card object
      const newSavedCard = {
        _id: action.payload._id,
        userId: decryptedUserDataObject.user_id,
        headerValue: action.payload.headerValue,
        bodyValue: action.payload.bodyValue,
        files: action.payload.files,
        color: action.payload.color,
      } as CardInterface;

      const cards: any = [...state.cardData];
      cards.splice(action.payload.index, 1, newSavedCard);

      // Updating data of database
      NoteInstance.put("/update/", newSavedCard, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      state.cardData = cards;
    },

    copyCard: (state, action) => {
      // Getting decrypted data from local storage
      const decryptedUserData: any = secureLocalStorage.getItem("UserData");

      const decryptedUserDataObject = JSON.parse(decryptedUserData);

      // Creating new card object
      const dataOfNewCopiedCard: CardInterface = {
        _id: Date.now() + Math.floor(Math.random() * 78),
        userId: decryptedUserDataObject.user_id,
        headerValue: action.payload.headerValue,
        bodyValue: action.payload.bodyValue,
        files: action.payload.files,
        color: action.payload.color,
      };
      const newCopiedCard: any = [...state.cardData, dataOfNewCopiedCard];

      // Copying data of database
      NoteInstance.post("/copy/", dataOfNewCopiedCard);

      state.cardData = newCopiedCard;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(apiData.pending, (state) => {
      state.loading = true;
      state.message = null;
    });

    builder.addCase(apiData.fulfilled, (state, action) => {
      state.loading = false;
      state.cardData = action.payload;
      state.message = null;
    });

    builder.addCase(apiData.rejected, (state, action) => {
      state.loading = false;
      state.message = action.error.message;
    });
  },
});

// Exports
export default cardSlice.reducer;
export const { addCard, deleteCard, saveCard, copyCard } = cardSlice.actions;
