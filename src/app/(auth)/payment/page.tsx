"use client";

import { createCheckoutSession } from "@/actions/actions";
import H1 from "@/components/h1";
import { Button } from "@/components/ui/button";
import { PET_CENTER_LIFETIME_ACCESS_PRICE } from "@/lib/constants";
import { useTransition } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [isPending, startTransition] = useTransition();
  const { update } = useSession();
  const router = useRouter();

  return (
    <main className="flex flex-col items-center space-y-10">
      <H1>Pet Center access requires payment</H1>

      {searchParams.success && (
        <Button
          onClick={async () => {
            await update(true);
            router.push("/app/dashboard");
          }}
        >
          Access Pet Center
        </Button>
      )}

      {!searchParams.success && (
        <Button
          disabled={isPending}
          onClick={() => {
            startTransition(async () => {
              await createCheckoutSession();
            });
          }}
        >
          Buy lifetime access for {PET_CENTER_LIFETIME_ACCESS_PRICE}
        </Button>
      )}

      {searchParams.success && (
        <p className="text-sm text-green-600">
          Payment successful! You now have lifetime access to Pet Center.
        </p>
      )}

      {searchParams.canceled && (
        <p className="text-sm text-red-600">
          Payment cancelled. You can try again.
        </p>
      )}
    </main>
  );
}
