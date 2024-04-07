import AppFooter from "@/components/app-footer";
import AppHeader from "@/components/app-header";
import BackgroundPattern from "@/components/background-pattern";
import PetContextProvider from "@/contexts/pet-context-provider";
import { Pet } from "@/lib/types";

const FETCH_URL1 = `https://bytegrad.com/course-assets/projects/petsoft/api/pets`;

async function Layout({ children }: { children: React.ReactNode }) {
  const response = await fetch(FETCH_URL1);
  if (!response.ok) {
    throw new Error("Could not fetch pets.");
  }

  const data: Pet[] = await response.json();

  return (
    <>
      <BackgroundPattern />
      <div className="flex flex-col max-w-[1050px] mx-auto px-4 min-h-screen">
        <AppHeader />
        <PetContextProvider data={data}>{children}</PetContextProvider>
        <AppFooter />
      </div>
    </>
  );
}

export default Layout;