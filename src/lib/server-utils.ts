import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import "server-only";

export async function checkAuth() {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }

  return session;
}
