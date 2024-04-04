import { Pet } from "@/lib/types";
import Image from "next/image";

type PetListProps = {
  pets: Pet[];
};

function PetList({ pets }: PetListProps) {
  return (
    <ul className="bg-white border-b border-black/[0.08]">
      {pets.map((pet) => (
        <li key={pet.id}>
          <button className="flex items-center h-[70px] w-full cursor-pointer px-5 text-base gap-3 hover:bg-[#EFF1F2] focus:hover:bg-[#EFF1F2] transition">
            <Image
              src={pet.imageUrl}
              width={45}
              height={45}
              alt="Pet Image"
              className="h-[45px] w-[45px] rounded-full object-cover"
            />
            <p className="font-semibold">{pet.name}</p>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default PetList;
