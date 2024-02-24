import React from "react";
import { Chart, Dashboard, FoodProfileChart } from "../Components";

function DashboardPage() {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <Dashboard />
      <div className="flex flex-row gap-4 w-full">
        <Chart />
        <FoodProfileChart />
      </div>
    </div>
  );
}

export default DashboardPage;
