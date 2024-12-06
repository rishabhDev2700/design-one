import React from "react";
import { CalendarIcon, PlusIcon } from "@radix-ui/react-icons";

export default function Topbar() {
  return (
    <div className="flex justify-between items-center h-16 py-8 px-12">
      <div className="text-2xl font-semibold">Dashboard</div>
      <div className="flex">
        <div className="flex items-center justify-between rounded-2xl px-4 py-2 border-2 border-neutral-950 hover:bg-neutral-900 hover:text-white duration-200">
          <CalendarIcon />
        </div>
        <button className="ml-4 flex items-center justify-between rounded-2xl px-4 py-2 border-2 border-neutral-950 hover:bg-neutral-900 hover:text-white duration-200">
          <PlusIcon />
          <div>Transaction</div>
        </button>
      </div>
    </div>
  );
}
