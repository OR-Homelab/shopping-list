"use client";

import { login, logout, getSession } from "@/lib/login";
import { Session } from "next-auth";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";

export function LoginButton() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const handleSession = async () => {
      const authOutput = await getSession();
      setSession(authOutput);
    };

    handleSession();
  }, []);

  return (
    <div className="flex flex-row w-50">
      <div className="m-auto">
        {session?.user ? (
          <form
            action={async () => {
              await logout();
            }}
          >
            <button
              type="submit"
              className="flex flex-row rounded-2xl bg-button hover:bg-button-hover p-3 pl-5 pr-5"
            >
              <GrLogout className="m-auto mr-2 size-6" />
              Logout
            </button>
          </form>
        ) : (
          <form
            action={async () => {
              await login(session);
            }}
          >
            <button
              type="submit"
              className="flex flex-row rounded-2xl bg-button hover:bg-button-hover p-3 pl-5 pr-5"
            >
              <FaGithub className="m-auto mr-2 size-6" />
              Login with GitHub
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
