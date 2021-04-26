import React from "react";
import AppHeader from "./components/AppHeader";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

function App() {
  return (
    <BrowserRouter>
      <div className="w-screen h-screen overflow-x-hidden">
        <AppHeader />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
