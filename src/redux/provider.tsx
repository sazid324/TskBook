"use client";

// Library imports
import React from "react";
import { Provider } from "react-redux";

// Redux Imports
import store from "./store";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
