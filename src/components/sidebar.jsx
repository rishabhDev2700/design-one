import {
  ArrowTopRightIcon,
  BackpackIcon,
  CalendarIcon,
  Component2Icon,
  PieChartIcon,
  StackIcon,
} from "@radix-ui/react-icons";
import React from "react";
import { Link } from "react-router";

export default function Sidebar() {
  return (
    <div className="col-span-2 row-span-full border-r-2 bg-white p-8 flex flex-col justify-around">
      <div className="font-black text-xl text-center mb-4">Credz</div>
      <div className="flex items-center justify-start">
        <img
          src="https://images.pexels.com/photos/2128816/pexels-photo-2128816.jpeg"
          className="rounded-full w-12 h-12 object-cover"
        />
        <div className="ml-2">
          <div className="text-sm font-bold">Rishabh Dev</div>
          <Link
            to="/"
            className="text-xs text-gray-500 hover:text-gray-600 hover:underline duration-200"
          >
            Edit profile
          </Link>
        </div>
      </div>
      <nav className="flex flex-col py-4">
        <Link
          to=""
          className="flex items-center justify-start gap-4 rounded-2xl px-6 py-2 my-2 hover:bg-green-500 hover:text-white duration-200"
        >
          <Component2Icon />
          <div>Analytics</div>
        </Link>
        <Link
          to=""
          className="flex items-center justify-start gap-4 rounded-2xl px-6 py-2 my-2 hover:bg-green-500 hover:text-white duration-200"
        >
          <BackpackIcon />
          <div>Budget</div>
        </Link>
        <Link
          to=""
          className="flex items-center justify-start gap-4 rounded-2xl px-6 py-2 my-2 hover:bg-green-500 hover:text-white duration-200"
        >
          <CalendarIcon />
          <div>Calendar</div>
        </Link>
        <Link
          to=""
          className="flex items-center justify-start gap-4 rounded-2xl px-6 py-2 my-2 hover:bg-green-500 hover:text-white duration-200"
        >
          <StackIcon />
          <div>Accounts</div>
        </Link>
        <Link
          to=""
          className="flex items-center justify-start gap-4 rounded-2xl px-6 py-2 my-2 hover:bg-green-500 hover:text-white duration-200"
        >
          <ArrowTopRightIcon />
          <div>Saving</div>
        </Link>
        <Link
          to=""
          className="flex items-center justify-start gap-4 rounded-2xl px-6 py-2 my-2 hover:bg-green-500 hover:text-white duration-200"
        >
          <PieChartIcon />
          <div>Debts</div>
        </Link>
      </nav>
      <div className="p-8 bg-neutral-200 rounded-2xl flex flex-col items-stretch">
        <div className="font-bold text-sm">Upgrade to Pro</div>
        <div className="font-light text-xs">Get full access and benefits</div>
        <button className="py-2 mt-4 bg-neutral-900 text-white rounded-2xl text-sm">UPGRADE</button>
      </div>
    </div>
  );
}
