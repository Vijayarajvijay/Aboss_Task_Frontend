import React, { useState, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";


function App() {

  return (
    <>
      <BrowserRouter>
      <AppRoutes/>
      </BrowserRouter>
    </>
  );
}

export default App;
