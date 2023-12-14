import SideBar from "./SideBar";
import { ArrowLeftRight, BarChart3, MenuSquare,  Utensils } from "lucide-react";
import Item from "./Item";
import { NavLink } from "react-router-dom";

function SideComponent() {
 

  return (
    <div>
      <SideBar>
        <NavLink exact to="/dash">
          <Item icon={<BarChart3 size={20} />} text="Dashboard" active />
        </NavLink>
        <NavLink to='all-products'>
            <Item icon={<Utensils size={20} />} text="Food" />
          
            </NavLink>
        <NavLink to="/menu">
          <Item icon={<MenuSquare size={20} />} text="Menu" />
        </NavLink>
        <NavLink to="/orders">
          <Item icon={<ArrowLeftRight size={20} />} text="Orders" alert />
        </NavLink>
      </SideBar>
    </div>
  );
}

export default SideComponent;
