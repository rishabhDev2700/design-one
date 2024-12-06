import React from "react";

export default function AssetChip({icon,name,total,change,color}) {
  return (
    <div className={`rounded-xl bg-gradient-to-r from-neutral-700 to-neutral-800 text-neutral-100 flex items-center justify-between px-4 py-2 my-2 border shadow-md `}>
      <div className="flex items-center">
        <div className="p-1 rounded-full bg-white">
            {icon}
        </div>
        <div className="mx-4">
          <div className="text-xs font-semibold">{name}</div>
          <div className="">${total}</div>
        </div>
      </div>
      <div className="">{change}%</div>
    </div>
  );
}
