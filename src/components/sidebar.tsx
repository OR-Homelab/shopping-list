"use client";

import Link from "next/link";
interface props {
  isExpanded: boolean;
}

export function Sidebar(props: props) {
  return (
    <div
      className={`fixed h-full top-16 left-0 bg-foreground2 z-10 transition-all duration-250 ${
        props.isExpanded ? "w-64" : "w-0"
      }`}
    >
      <nav className="overflow-hidden flex flex-col">
        <Link href="/">Home</Link>
        <Link href="/shopping">Shopping</Link>
        <Link href="/settings">Settings</Link>
      </nav>
    </div>
  );
}
