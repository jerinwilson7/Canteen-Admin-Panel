import React from "react";

function Item({ icon, text, active, alert }) {
  return (
    <li
      className={`
        relative flex flex-1 justify-center items-center py-2 px-3 my-1 bg-red
        font-medium rounded-md cursor-pointer text-chineseBlack 
        hover:bg-green-200 bg-opacity-50 hover:text-seaGreen 
        transition duration-300 ease-in-out
        ${
          active
            ? "bg-green-200  from-indigo-200 to-indigo-100 text-seaGreen"
            : "hover:bg-green-200 text-chineseBlack"
        }
      `}
    >
      {icon}
      <span className="overflow-hidden transition-all w-52 ml-3">{text}</span>
    </li>
  );
}
export default Item;
