import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

window.onblur = function () {
  document.title = "Возвращайтесь  😊";
};
window.onfocus = function () {
  document.title = "MyProJect-4";
};

createRoot(document.getElementById("root")).render(<App />);
