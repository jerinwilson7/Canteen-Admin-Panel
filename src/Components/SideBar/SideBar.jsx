import React from "react";

function SideBar({ children }) {
  return (
    <aside className="flex h-screen w-1/5 fixed">
      <nav className="h-full flex flex-col bg-paleSilver border-r shadow-sm ">
        <div className="p-4 pb-2 flex justify-center items-center">
          <h3 className="font-bold block text-3xl text-raisingBlack">Admin</h3>
          <p className="text-seaGreen font-bold text-3xl">.</p>
        </div>

        <div className="h-3/4 flex justify-center">
          <div className="flex flex-col p-3 m-4 w-60">
            <ul className="space-y-3">{children}</ul>
          </div>
        </div>
        <hr />

        <div className="mt-2 border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className="
              flex justify-between items-center
              overflow-hidden transition-all w-52 ml-3"
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export default SideBar;
