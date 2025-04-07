"use client";

import List from "@/components/lists/list";
import { useEffect, useState } from "react";
import { redirect, useParams } from "next/navigation";
import Loading from "@/components/loading";

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

export default function Page() {
  const { listid } = useParams();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    fetch(`/api/db/hasAccess?listId=${listid}`)
      .then((data) => data.json())
      .then((data) => {
        setAuthorized(data.data);
        setLoading(false);
      });
  }, [listid]);

  if (loading) return <Loading />;
  if (!authorized) redirect("/shopping");

  return (
    <div>
      <List
        data={sampleData}
        total_price={5000}
        addItem={() => {}}
        removeItem={() => {}}
      />
    </div>
  );
}
