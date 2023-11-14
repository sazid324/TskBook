// Library imports
import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Interfaces
interface CardInterface {
  _id: number;
  headerValue: string;
  bodyValue: string;
  files: string[];
  color: string;
}

interface StateInterface {
  cardData: any;
  loading: boolean;
  error: any;
}

// API data
export const apiData: any = createAsyncThunk(
  "notes",
  async (_, { rejectWithValue }) => {
    try {
      const storedValue: any = await axios.get(
        "http://127.0.0.1:8000/note/read/"
      );
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
    error: null,
  } as StateInterface,
  reducers: {
    addCard: (state) => {
      const newCardData: CardInterface = {
        _id: Date.now() + Math.floor(Math.random() * 78),
        headerValue: "",
        bodyValue: "",
        files: [],
        color: "#FFFFFF",
      };

      const newCard: any = [...state.cardData, newCardData];

      // Saving data to database
      axios
        .post("http://127.0.0.1:8000/note/add/", newCardData, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .catch((error) => {
          state.error = error.response.error;
        });

      state.cardData = newCard;
    },

    deleteCard: (state, action) => {
      const deletedCardId: string = state.cardData[action.payload]._id;
      const cards: any = [...state.cardData];
      cards.splice(action.payload, 1);

      // Deleting data from database
      axios
        .delete(`http://127.0.0.1:8000/note/delete/?_id=${deletedCardId}`)
        .catch((error) => {
          state.error = error.response.error;
        });

      state.cardData = cards;
    },

    saveCard: (state, action) => {
      const newSavedCard = {
        _id: action.payload._id,
        headerValue: action.payload.headerValue,
        bodyValue: action.payload.bodyValue,
        files: action.payload.files,
        color: action.payload.color,
      } as CardInterface;

      const cards: any = [...state.cardData];
      cards.splice(action.payload.index, 1, newSavedCard);

      // Updating data of database
      axios
        .put("http://127.0.0.1:8000/note/update/", newSavedCard)
        .catch((error) => {
          state.error = error.response.error;
        });

      state.cardData = cards;
    },

    copyCard: (state, action) => {
      const dataOfNewCopiedCard: CardInterface = {
        _id: Date.now() + Math.floor(Math.random() * 78),
        headerValue: action.payload.headerValue,
        bodyValue: action.payload.bodyValue,
        files: action.payload.files,
        color: action.payload.color,
      };
      const newCopiedCard: any = [...state.cardData, dataOfNewCopiedCard];

      // Copying data of database
      axios
        .post("http://127.0.0.1:8000/note/copy/", dataOfNewCopiedCard, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .catch((error) => {
          state.error = error.response.error;
        });

      state.cardData = newCopiedCard;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(apiData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(apiData.fulfilled, (state, action) => {
      state.loading = false;
      state.cardData = action.payload;
      state.error = null;
    });

    builder.addCase(apiData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

// Exports
export default cardSlice.reducer;
export const { addCard, deleteCard, saveCard, copyCard } = cardSlice.actions;
