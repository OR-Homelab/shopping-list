import { signIn, signOut, auth } from "@/auth/auth";
import { FaGithub } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";

export async function LoginButton() {
  const session = await auth();

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
              "use server";
              await signOut();
            }}
          >
            <button type="submit">Logout</button>
          </form>
        ) : (
          <form
            action={async () => {
              "use server";
              await signIn("github", { redirectTo: "/shopping" });
            }}
          >
            <button type="submit">Login with Github</button>
          </form>
        )}
      </div>
    </div>
  );
}
