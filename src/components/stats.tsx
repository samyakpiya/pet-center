"use client";

import React from "react";

import { usePetContext } from "@/lib/hooks";

function Stats() {
  const { numberOfPets } = usePetContext();

  return (
    <section className="text-right">
      <p className="text-2xl font-bold leading-6">{numberOfPets}</p>
      <p className="opacity-80">Current guests</p>
    </section>
  );
}

export default Stats;
