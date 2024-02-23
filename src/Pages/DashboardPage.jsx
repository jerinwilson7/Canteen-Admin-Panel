import React from "react";
import { Chart, Dashboard } from "../Components";

function DashboardPage() {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <Dashboard />
      <Chart/>
    </div>
  );
}

export default DashboardPage;
