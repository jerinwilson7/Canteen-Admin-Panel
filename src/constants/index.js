import { ArrowLeftRightIcon, BarChart3, Users, Utensils } from "lucide-react";

export const Sidebar_Links = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <BarChart3 />,
  },
  {
    key: "food",
    label: "Food",
    path: "/all-products",
    icon: <Utensils />,
  },
  {
    key: "orders",
    label: "Orders",
    path: "/orders",
    icon: <ArrowLeftRightIcon />,
  },
  {
    key: "users",
    label: "Users",
    path: "/users",
    icon: <Users />,
  },
];
