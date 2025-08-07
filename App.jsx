import React from "react";
import Login from "./Components/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing";
import Order from "./Components/Order";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/Login" element={<Login />} />
          <Route path="/Order" element={<Order/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
