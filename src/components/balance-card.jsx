import {useState} from 'react'
import { Slider } from "../components/ui/slider";
import BankCard from "../components/bank-card";
import {
TriangleDownIcon,
TriangleUpIcon,
PlusIcon,
} from "@radix-ui/react-icons";
import { Button } from "../components/ui/button";

export default function BalanceCard() {
    const [value, setValue] = useState(0);

  return (
    <div className="rounded-2xl bg-gradient-to-br from-neutral-800/90 to-neutral-950/90 backdrop-blur-md p-4 col-span-2 row-span-5 text-white shadow-md shadow-neutral-500">
            <div className="text-neutral-400">Total Balance</div>
            <div className="text-3xl">$ {value}</div>
            <div className="my-8">
              <Slider
                defaultValue={[value]}
                max={10000}
                step={1}
                className="my-4"
                onValueChange={setValue}
              />
              <div className="flex justify-between items-center text-xs">
                <div className="">Monthly payment limit</div>
                <div className="">$ 2590</div>
              </div>
            </div>
            <div className="">
              <div className="bg-neutral-700 px-4 py-2 my-2 rounded-xl flex items-center justify-between">
                <div className="rounded-full bg-neutral-500 p-2">
                  <TriangleUpIcon />
                </div>
                <div className="text-sm ">
                  <div className="font-thin text-xs">Outcome</div>
                  <div className="font-bold">$3600</div>
                </div>
              </div>
              <div className="bg-neutral-700 px-4 py-2 my-2 rounded-xl flex items-center justify-between">
                <div className="rounded-full bg-neutral-500 p-2">
                  <TriangleDownIcon />
                </div>
                <div className="text-sm ">
                  <div className="font-thin text-xs">Income</div>
                  <div className="font-bold">$3600</div>
                </div>
              </div>
            </div>
            <div className="my-8">
              {/* cards */}
              <BankCard
                balance={5750}
                cardNumber={"5282 3456 7898 1233"}
                expiry={"09/25"}
              ></BankCard>
              <BankCard
                balance={5750}
                cardNumber={"5282 3456 9988 7765"}
                expiry={"09/25"}
              ></BankCard>
              <Button className="bg-neutral-900 w-full" variant="outline">
                <PlusIcon />
              </Button>
            </div>
          </div>
  )
}
