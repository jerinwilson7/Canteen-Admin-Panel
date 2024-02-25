import React from "react";
import { Chart, Dashboard, FoodProfileChart, OrderTable } from "../Components";

function DashboardPage() {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <Dashboard />
      <div className="flex flex-row gap-4 w-full">
        <Chart />
        <FoodProfileChart />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <OrderTable />
      </div>
    </div>
  );
}

export default DashboardPage;
