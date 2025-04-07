"use client";

import { useParams } from "next/navigation";

export default function List() {
  const { listid } = useParams();
  return <div className="p-0 m-0">Det her er List med ID: {listid}</div>;
}
