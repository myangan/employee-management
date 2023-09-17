import React from "react";
import ReactDOM from "react-dom";
import "./styles/tailwind.css";
import App from "./App";
import { EmployeeDataProvider } from "./EmployeeDataContext";

ReactDOM.render(
  <React.StrictMode>
    <EmployeeDataProvider>
      <App />
    </EmployeeDataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
