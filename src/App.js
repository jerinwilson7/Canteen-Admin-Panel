import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {  AddProductPage, DashboardPage, FoodPage, LoginPage, MenuPage, OrdersPage } from "./Pages";
import { SideComponent } from "./Components";

function App() {
  return (
    <BrowserRouter>
    <div>
      <div className="">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          </Routes>
          </div>

          {/* Routes that include the sidebar */}
          <div className="flex">
          <Routes>
          <Route path="/*" element={<WithSidebarRoutes />} />
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
} 

// Component for routes that include the sidebar
function WithSidebarRoutes() {
  return (
    <>
      <SideComponent />
      <Routes>
        <Route path="/dash" element={<DashboardPage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/add-food" element={<AddProductPage />} />
        <Route path="/all-products" element={<FoodPage/>} />
      </Routes>
    </>
  );
}

export default App;
 