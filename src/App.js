import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AddProductPage,
  DashboardPage,
  EditFoodPage,
  FoodPage,
  LoginPage,
  OrdersPage,
  UsersPage,
} from "./Pages";
import { Layout } from "./Components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="/food" element={<FoodPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/add-food" element={<AddProductPage />} />
          <Route path="/all-products" element={<FoodPage />} />
          <Route path="/edit-food" element={<EditFoodPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
