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
      const newCard: any = [
        ...state.cardData,
        {
          _id: Date.now() + Math.floor(Math.random() * 78),
          headerValue: "",
          bodyValue: "",
          files: [],
          color: "#FFFFFF",
        } as CardInterface,
      ];

      // Saving data to local storage
      localStorage.setItem(
        "card-notes-in-local-storage",
        JSON.stringify(newCard)
      );

      state.cardData = newCard;
    },

    deleteCard: (state, action) => {
      const cards: any = [...state.cardData];
      cards.splice(action.payload, 1);

      // Saving data to local storage
      localStorage.setItem(
        "card-notes-in-local-storage",
        JSON.stringify(cards)
      );

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

      // Saving elements in local storage
      localStorage.setItem(
        "card-notes-in-local-storage",
        JSON.stringify(cards)
      );

      state.cardData = cards
    },

    copyCard: (state, action) => {
      const newCopiedCard: any = [
        ...state.cardData,
        {
          _id: Date.now() + Math.floor(Math.random() * 78),
          headerValue: action.payload.headerValue,
          bodyValue: action.payload.bodyValue,
          files: action.payload.files,
          color: action.payload.color,
        } as CardInterface,
      ];

      // Saving data to local storage
      localStorage.setItem(
        "card-notes-in-local-storage",
        JSON.stringify(newCopiedCard)
      );

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
