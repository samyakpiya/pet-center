import Branding from "@/components/branding";
import ContentBlock from "@/components/content-block";
import PetDetails from "@/components/pet-details";
import PetList from "@/components/pet-list";
import Search from "@/components/search";
import Stats from "@/components/stats";

const FETCH_URL1 = `https://bytegrad.com/course-assets/projects/petsoft/api/pets`;

async function Page() {
  const response = await fetch(FETCH_URL1);
  if (!response.ok) {
    throw new Error("Could not fetch pets.");
  }

  const data = await response.json();

  return (
    <main>
      <div className="flex justify-between items-center text-white py-8">
        <Branding />
        <Stats />
      </div>

      <div className="grid md:grid-cols-3 md:grid-rows-[45px_1fr] grid-rows-[45px_300px_500px] gap-4 min-h-[600px]">
        <div className="md:row-start-1 md:row-span-1 md:col-start-1md: col-span-1">
          <Search />
        </div>

        <div className="md:row-start-2 md:row-span-full md:col-start-1 md:col-span-1">
          <ContentBlock>
            <PetList pets={data} />
          </ContentBlock>
        </div>

        <div className="md:row-start-1 md:row-span-full md:col-start-2 md:col-span-full">
          <ContentBlock>
            <PetDetails />
          </ContentBlock>
        </div>
      </div>
    </main>
  );
}

export default Page;
