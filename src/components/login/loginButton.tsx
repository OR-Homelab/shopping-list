"use client";

import { login, logout, getSession } from "@/components/login/login";
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
      {session?.user ? (
        <GrLogout className="m-auto mr-2 size-6" />
      ) : (
        <FaGithub className="m-auto mr-2 size-6" />
      )}
      <div className="m-auto ml-0">
        {session?.user ? (
          <form
            action={async () => {
              await login();
            }}
          >
            <button type="submit">Logout</button>
          </form>
        ) : (
          <form
            action={async () => {
              await logout();
            }}
          >
            <button type="submit">Login with Github</button>
          </form>
        )}
      </div>
    </div>
  );
}
