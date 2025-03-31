"use client";

import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Link from "next/link";

import { Sidebar } from "@/components/sidebar";
import { LoginButton } from "@/components/login/loginButton";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="min-h-screen bg-backdrop">
      <header className="h-16 w-screen z-50 bg-navbar flex flex-row">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="ml-5 bg-button hover:bg-button-hover hover:cursor-pointer h-10 w-10 mt-auto mb-auto rounded-md"
        >
          {isExpanded ? (
            <IoMdClose className="size-8 m-auto" />
          ) : (
            <IoMdMenu className="size-8 m-auto" />
          )}
        </button>
        <div className="m-auto ml-5 mr-0 flex flex-row">
          <Link href="/shopping">
            <FaCartShopping className="m-auto size-8" />
          </Link>
          <h1 className="ml-5 text-2xl">Shopping List</h1>
        </div>
        <nav className="ml-5 m-auto flex flex-row"></nav>
        <LoginButton />
      </header>
      <Sidebar isExpanded={isExpanded} />
      <main
        className={`transition-all duration-250 ${
          isExpanded ? "ml-64" : "ml-0"
        }`}
      >
        {children}
      </main>
    </div>
  );
}
