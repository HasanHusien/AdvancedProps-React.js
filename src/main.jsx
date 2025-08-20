import { createRoot } from "react-dom/client";
import { useEffect, createElement } from "react";
import "./index.css";
import App from "./App.jsx";

let root = createRoot(document.getElementById("root"));
root.render(<App />);
