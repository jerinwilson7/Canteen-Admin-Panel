import React from "react";
import { AddProductPage, DashboardPage, FoodPage, LoginPage, MenuPage, OrdersPage } from "./Pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SideComponent } from "./Components";

function App() {
  return <div className=" flex">
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<LoginPage />} />
    </Routes>
      <SideComponent/>
      <Routes>
        
        <Route path="/dash" element={<DashboardPage/>}/>
        <Route path="/food" element={<FoodPage/>}/>
        <Route path="/menu" element={<MenuPage/>}/>
        <Route path="/orders" element={<OrdersPage/>}/>
        <Route path="/add-product" element={<AddProductPage/>}/>
        </Routes>
    </BrowserRouter>
  </div>
}

export default App;
