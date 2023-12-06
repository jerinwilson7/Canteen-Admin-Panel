import React from "react";
import SideBar from "./SideBar";
import { ArrowLeftRight, BarChart3, MenuSquare, Utensils } from "lucide-react";
import Item from "./Item";

function SideComponent() {
  return (
    <div>
      <SideBar>
        <Item icon={<BarChart3 size={20} />} text="Dashboard" path="/" active />
        <Item icon={<Utensils size={20} />} text="Food" />
        <Item icon={<MenuSquare size={20} />} text="Menu" />
        <Item icon={<ArrowLeftRight size={20} />} text="Orders" alert />
      </SideBar>
    </div>
  );
}

export default SideComponent;
