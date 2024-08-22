
import ReactDOM from "react-dom/client";

import CardProvider from "./context/CardProvider";

import App from "./App.jsx";
import "./index.css";
import MainLayout from "./layouts/MainLayout.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CardProvider>
      <MainLayout>
        <App />
      </MainLayout>
    </CardProvider>
  </BrowserRouter>
);
