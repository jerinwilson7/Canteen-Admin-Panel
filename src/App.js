import React from "react";
import { DashboardPage, FoodPage, LoginPage, MenuPage, OrdersPage } from "./Pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SideComponent } from "./Components";

function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dash" element={<DashboardPage/>}/>
        <Route path="/food" element={<FoodPage/>}/>
        <Route path="/menu" element={<MenuPage/>}/>
        <Route path="/orders" element={<OrdersPage/>}/>
        </Routes>
        <SideComponent/>
    </BrowserRouter>
  </div>
}

export default App;
