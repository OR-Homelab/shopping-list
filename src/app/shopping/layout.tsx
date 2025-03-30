"use client";

import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";

import Sidebar from "@/components/sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-backdrop">
      <header className="h-16 w-screen z-50 bg-navbar flex flex-row">
        <div className="m-auto ml-5 mr-0 flex flex-row">
          <Link href="/">
            <FaCartShopping className="m-auto size-8" />
          </Link>
          <h1 className="ml-5 text-2xl">Shopping List</h1>
        </div>
        <nav className="ml-5 m-auto">
          <button onClick={() => setIsExpanded(!isExpanded)}>Sidebar</button>
        </nav>
      </header>
      <Sidebar isExpanded={isExpanded} />
      <main
        className={`pt-8 transition-all duration-300 ${
          isExpanded ? "ml-64" : "ml-0"
        }`}
      >
        {children}
      </main>
    </div>
  );
}
