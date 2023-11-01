// Library imports
import { createSlice } from "@reduxjs/toolkit";

// Interfaces
interface Card {
  id: number;
  headerValue: string;
  bodyValue: string;
  files: string[];
  color: string;
}

// Initial state
const initialState: any = () => {
  const storedValue: any = localStorage.getItem("card-notes-in-local-storage");
  return storedValue ? JSON.parse(storedValue) : [];
};

// Redux slice
const cardSlice = createSlice({
  name: "CardSlice",
  initialState: initialState,
  reducers: {
    addCard: (state) => {
      const newCard = [
        ...state,
        {
          id: Date.now() + Math.floor(Math.random() * 78),
          headerValue: "",
          bodyValue: "",
          files: [],
          color: "#FFFFFF",
        } as Card,
      ];

      // Saving data to local storage
      localStorage.setItem(
        "card-notes-in-local-storage",
        JSON.stringify(newCard)
      );

      return newCard;
    },

    deleteCard: (state, action) => {
      const cards: any = [...state];
      cards.splice(action.payload, 1);

      // Saving data to local storage
      localStorage.setItem(
        "card-notes-in-local-storage",
        JSON.stringify(cards)
      );

      return cards;
    },

    saveCard: (state, action) => {
      const newSavedCard = {
        id: action.payload.id,
        headerValue: action.payload.headerValue,
        bodyValue: action.payload.bodyValue,
        files: action.payload.files,
        color: action.payload.color,
      } as Card;

      const cards: any = [...state];
      cards.splice(action.payload.index, 1, newSavedCard);

      // Saving elements in local storage
      localStorage.setItem(
        "card-notes-in-local-storage",
        JSON.stringify(cards)
      );

      return cards;
    },

    copyCard: (state, action) => {
      const newCopiedCard = [
        ...state,
        {
          id: Date.now() + Math.floor(Math.random() * 78),
          headerValue: action.payload.headerValue,
          bodyValue: action.payload.bodyValue,
          files: action.payload.files,
          color: action.payload.color,
        } as Card,
      ];

      // Saving data to local storage
      localStorage.setItem(
        "card-notes-in-local-storage",
        JSON.stringify(newCopiedCard)
      );

      return newCopiedCard;
    },
  },
});

// Exports
export default cardSlice.reducer;
export const { addCard, deleteCard, saveCard, copyCard } = cardSlice.actions;
