import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {  AddProductPage, DashboardPage, EditFoodPage, FoodPage, LoginPage, MenuPage, OrdersPage } from "./Pages";
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
    <div className="flex">
      {/* Sidebar */}
      <div className="flex-none w-64 bg-gray-200">
        <SideComponent />
      </div>

      {/* Content */}
      <div className="flex-grow mr-5 ml-10">
        <Routes>
          <Route path="/dash" element={<DashboardPage />} />
          <Route path="/food" element={<FoodPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/add-food" element={<AddProductPage />} />
          <Route path="/all-products" element={<FoodPage/>} />
          <Route path="/edit-food" element={<EditFoodPage/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
 