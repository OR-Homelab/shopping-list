"use client";

import { useParams } from "next/navigation";

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
  const { listid } = useParams();
  return <div className="p-0 m-0">Det her er List med ID: {listid}</div>;
}
