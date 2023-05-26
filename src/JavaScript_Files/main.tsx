// Library imports
import React from "react";
import ReactDOM from "react-dom/client";

// Component imports
import App from "../Components/App";

// CSS imports
import "../CSS_Files/style.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
