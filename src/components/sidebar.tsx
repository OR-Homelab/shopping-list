"use client";

import { NavButton } from "@/components/navButton";
interface props {
  isExpanded: boolean;
}

export function Sidebar(props: props) {
  return (
    <div
      className={`fixed h-full top-16 left-0 bg-sidebar z-10 transition-all duration-300 ${
        props.isExpanded ? "w-64" : "w-0"
      }`}
    >
      <nav className="overflow-hidden flex flex-col gap-5">
        <NavButton text="Home" href="/shopping" className="mt-5" />
        <NavButton text="List" href="/shopping/list" />
        <NavButton text="Add Item" href="/shopping/add-item" />
        {/* <Link href="">Receipts</Link> */}
      </nav>
    </div>
  );
}
