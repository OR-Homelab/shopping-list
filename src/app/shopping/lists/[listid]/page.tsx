"use client";

import List from "@/components/lists/list";
import { useEffect, useState } from "react";
import { redirect, useParams } from "next/navigation";
import Loading from "@/components/loading";

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
  }, []);

  if (loading) return <Loading />;
  if (!authorized) redirect("/shopping");

  return <List />;
}
