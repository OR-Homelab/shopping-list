"use client";

import { useState } from "react";

import Sidebar from "@/components/sidebar";

export default function Layout({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-backdrop">
      <header className="h-16 w-screen z-50 bg-navbar">
        <h1>Shopping List</h1>
        <nav>
          <button onClick={() => setIsExpanded(!isExpanded)}>Sidebar</button>
        </nav>
      </header>
      <Sidebar isExpanded={isExpanded} />
      <main
        className={`pt-16 transition-all duration-300 ${
          isExpanded ? "ml-64" : "ml-0"
        }`}
      >
        {children}
      </main>
    </div>
  );
}
