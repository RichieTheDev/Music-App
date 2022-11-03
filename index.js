import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Charts from "./pages/Charts";
import Player from "./components/Player";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route
        exact
        path="/"
        element={
          <>
            <Navbar />
            <Player />
          </>
        }
      >
        <Route index element={<Home />} />
        <Route path="/Charts" element={<Charts />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
