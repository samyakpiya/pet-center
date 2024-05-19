import Logo from "@/components/logo";
import dashboard from "../../../public/dashboard.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white min-h-screen flex items-center justify-center px-14 py-20 max-w-screen-2xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-10">
        <section className="flex flex-col justify-between">
          <Logo className="h-10 w-auto" />
          <h1 className="text-5xl font-semibold my-6 max-w-[500px]">
            Manage your <span className="font-bold">pet daycare</span> with ease
          </h1>
          <p className="text-2xl font-medium max-w-[600px]">
            Use Pet Center to easily keep track of pets under your care. Get
            lifetime access for just $49.
          </p>
          <div className="mt-6 space-x-3">
            <Button size="lg" asChild>
              <Link href="/signup">Start a free trial</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </section>

        <Image
          src={dashboard}
          alt="Preview of Pet Center"
          className="h-[32rem] rounded-md shadow-2xl object-cover"
        />
      </div>
    </main>
  );
}
