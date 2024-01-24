import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DataContentProvider from "./component/context/DataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataContentProvider>
    <App />
  </DataContentProvider>
);
