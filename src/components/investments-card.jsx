import React from "react";
import { Button } from "../components/ui/button";
import {
  ArrowTopRightIcon,

} from "@radix-ui/react-icons";
import { BitcoinIcon, ChartCandlestickIcon, LandmarkIcon } from "lucide-react";

import AssetChip from "./asset-chip";
export default function InvestmentsCard() {
  return (
    <div className="col-span-3 row-span-2 bg-white rounded-2xl shadow-md">
      <div className="flex py-2 px-4 items-center justify-between">
        <div>My investments</div>
        <Button className="rounded-full" variant="outline" size="icon">
          <ArrowTopRightIcon color="gray" />
        </Button>
      </div>
      <div className="p-2">
      <AssetChip icon={<ChartCandlestickIcon className="" color="green" size={24} />} name="Stocks" change="+4" total="20000"/>
      <AssetChip icon={<BitcoinIcon className="" color="purple" size={24} />} color="purple" name="Cryptocurrency" change="-10" total="1500"/>
      <AssetChip icon={<LandmarkIcon className="" color="teal" size={24} />} color="teal" name="Stocks" change="+4" total="5000"/>
      </div>
    </div>
  );
}
