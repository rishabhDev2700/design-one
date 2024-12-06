import React from "react";
import { Label, Pie, PieChart } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "./ui/button";
import { PlusIcon } from "@radix-ui/react-icons";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
};
export default function BreakdownCard() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);
  return (
    <div className="col-span-5 row-span-2 bg-gradient-to-r from-neutral-800/90 to-neutral-950/90 rounded-2xl shadow-md shadow-neutral-500">
      <div className="text-white p-4">Transactions</div>
      <div className="flex">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] w-1/2"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={70}
              outerRadius={100}
              strokeWidth={5}
              paddingAngle={4}
              cornerRadius={4}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="white"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-background"
                        >
                          Spent
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
        <div className="w-1/2 text-white">
        <div className="flex flex-col h-3/4">

          <div className="flex justify-evenly items-center my-2">
            <div className="w-4 h-4 bg-orange-400"></div>
            <div className="w-1/2 text-xs">Entertainment</div>
          </div>
          <div className="flex justify-evenly items-center my-2">
            <div className="w-4 h-4 bg-teal-900"></div>
            <div className="w-1/2 text-xs">Entertainment</div>
          </div>
          <div className="flex justify-evenly items-center my-2">
            <div className="w-4 h-4 bg-teal-600"></div>
            <div className="w-1/2 text-xs">Entertainment</div>
          </div>
        </div>
          <Button className="flex items-center justify-around bg-transparent w-max place-self-center" variant="outline">Add category <PlusIcon/></Button>
        </div>
      </div>
    </div>
  );
}
