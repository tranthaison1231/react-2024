import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="h-screen bg-gray-100">
      <Header />
      <Todos />
      <Footer />
    </div>
  </React.StrictMode>,
);
