"use client";

import { createCheckoutSession } from "@/actions/actions";
import H1 from "@/components/h1";
import { Button } from "@/components/ui/button";
import { PET_CENTER_LIFETIME_ACCESS_PRICE } from "@/lib/constants";

export default function Page({ searchParams }) {
  return (
    <main className="flex flex-col items-center space-y-10">
      <H1>Pet Center access requires payment</H1>

      {!searchParams.success && (
        <Button
          onClick={async () => {
            await createCheckoutSession();
          }}
        >
          Buy lifetime access for {PET_CENTER_LIFETIME_ACCESS_PRICE}
        </Button>
      )}

      {searchParams.success && (
        <p className="text-sm text-green-600">
          Payment successful! You now have lifetime access to PetCenter.
        </p>
      )}
    </main>
  );
}
