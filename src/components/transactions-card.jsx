import React from 'react'
import { monthlyExpenses } from "../lib/data";
import { Bar, BarChart, XAxis,YAxis } from "recharts";
import {
  ChartTooltip,
  ChartTooltipContent,
  ChartContainer,
} from "./../components/ui/chart";
export default function TransactionsCard() {
    const chartConfig = {
        total: {
          label: "Expense",
          color: "#2563eb",
        },
      };
  return (
    <div className="rounded-2xl bg-white backdrop-blur-md px-8 py-4 col-span-8 row-span-1 shadow-md">
            <div className="text-neutral-900">Your Transaction this year</div>
            <div className="">
              <ChartContainer
                config={chartConfig}
                className="min-h-[200px] h-[40vh]  w-full mt-8"
              >
                <BarChart accessibilityLayer data={monthlyExpenses}>
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                   <YAxis
                    dataKey="total"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="total" fill="#333333" radius={8} />
                </BarChart>
              </ChartContainer>
            </div>
          </div>
  )
}
