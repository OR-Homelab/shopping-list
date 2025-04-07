"use client";

import Loading from "@/components/loading";
import BoxedList from "@/components/lists/boxedList";
import AddList from "@/components/lists/addList";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [lists, setLists] = useState<{
    data: null | [{ id: number; name: string }];
    error: null | string;
  }>({ data: null, error: null });

  useEffect(() => {
    fetch("/api/db/lists", { method: "GET" })
      .then((data) => data.json())
      .then((data) => {
        setLists(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (lists && lists.error) return <p>{lists.error}</p>; // TODO: There can't possibly be errors here right now.

  return (
    <div className="flex">
      <div className="grid grid-cols-5 gap-15 m-auto my-5 overflow-y-auto">
        <AddList />
        {lists === null || lists.data === null
          ? ""
          : lists.data.map((list) => (
              <BoxedList
                key={list.id}
                title={list.name}
                onClick={() => redirect("/shopping/lists/" + list.id)}
              />
            ))}
      </div>
    </div>
  );
}
