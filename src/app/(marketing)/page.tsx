import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white min-h-screen flex flex-col xl:flex-row items-center justify-center gap-10">
      <Logo />

      <div>
        <Logo className="h-10 w-auto" />
        <h1 className="text-5xl font-semibold my-6 max-w-[500px]">
          A flexible system to meet the needs of your pet daycare
        </h1>
        <p className="text-2xl font-medium max-w-[600px]">
          A flexible system to meet the needs of your pet daycare. Pet Center is
          a set of software tools to help keep track of pets under your care.
        </p>
        <div className="mt-10 space-x-3">
          <Button size="lg" asChild>
            <Link href="/signup">Start a free trial</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
