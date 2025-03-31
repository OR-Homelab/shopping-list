"use client";

import { ProgressCircle } from "@/components/tremor/progressCircle";
import { DonutChart } from "@/components/tremor/donutChart";
import { Tracker } from "@/components/tremor/tracker";

const trackerData = [
  { color: "bg-emerald-600", tooltip: "Under Budget 03/2025" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-red-600", tooltip: "Over Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-red-600", tooltip: "Over Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-yellow-600", tooltip: "Near Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
  { color: "bg-emerald-600", tooltip: "Under Budget" },
];

const donutData = [
  {
    name: "SolarCells",
    amount: 4890,
  },
  {
    name: "Glass",
    amount: 2103,
  },
  {
    name: "Rema1000",
    amount: 2050,
  },
  {
    name: "Adhesive",
    amount: 1300,
  },
  {
    name: "BackSheet",
    amount: 1100,
  },
  {
    name: "Frame",
    amount: 700,
  },
  {
    name: "Encapsulant",
    amount: 200,
  },
];

export default function Page() {
  return (
    <div className="h-[calc(100%-var(--spacing)*50)] grid grid-cols-2 grid-rows-3 w-[80%] m-auto">
      {/* Budget tracker */}
      <div className="flex flex-col items-center justify-center h-full col-span-2">
        <div className="text-dark-text text-center mb-5">
          <p className="text-2xl font-medium">Budget overspending</p>
        </div>
        <Tracker data={trackerData} hoverEffect={true} />
      </div>
      {/* Budget ProgressCircle */}
      <div className="flex items-center justify-center gap-x-5 h-full">
        <ProgressCircle value={75} radius={100} strokeWidth={10}>
          <span className="text-3xl font-medium text-dark-text">75%</span>
        </ProgressCircle>
        <div>
          <p className="text-2xl font-medium text-dark-text">$340/$450</p>
          <p className="text-l text-dark-text">Money left this month</p>
        </div>
      </div>
      {/* Money category donut */}
      <div className="flex items-center justify-center h-full">
        <DonutChart
          className="mr-10"
          data={donutData}
          category="name"
          value="amount"
          showLabel={true}
          colors={["blue", "violet", "cyan", "emerald"]}
          valueFormatter={(number: number) =>
            `${Intl.NumberFormat("da-DK", {
              style: "currency",
              currency: "DKK",
            })
              .format(number)
              .toString()}`
          }
        />
        <div>
          <p className="text-2xl font-medium text-dark-text">12.343,00 kr.</p>
          <p className="text-l text-dark-text">Money spent this month</p>
        </div>
      </div>
    </div>
  );
}
