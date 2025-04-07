"use client";

import ListItem from "@/components/lists/listItem";

const sampleData = [
  {
    id: 1,
    item_name: "Test",
    item_amount: 2,
    item_price: 100,
    is_bought: false,
  },
  {
    id: 2,
    item_name: "Test",
    item_amount: 5,
    item_price: 50,
    is_bought: false,
  },
  {
    id: 3,
    item_name: "Test",
    item_amount: 52,
    item_price: 90,
    is_bought: false,
  },
  {
    id: 4,
    item_name: "Test",
    item_amount: 3,
    item_price: 120,
    is_bought: false,
  },
];

export default function List() {
  return (
    <div className="flex h-full">
      <div className="flex flex-col gap-5 mx-auto w-[80%]">
        {sampleData.map((item) => (
          <ListItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
