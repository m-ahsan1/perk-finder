import React from "react";
import PerkCard from "./components/PerkCard";

const perkData = [
  {
    id: 1,
    name: "Perk 1",
    description: "This is perk 1",
    discount: 10,
    brand: "Brand 1",
    card: "Card 1",
    bank: "Bank 1",
  },
  {
    id: 2,
    name: "Perk 2",
    description: "This is perk 2",
    discount: 20,
    brand: "Brand 2",
    card: "Card 2",
    bank: "Bank 2",
  },
  {
    id: 3,
    name: "Perk 3",
    description: "This is perk 3",
    discount: 15,
    brand: "Brand 3",
    card: "Card 3",
    bank: "Bank 3",
  },

];



function MainPage() {

  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredPerks = perkData.filter((perk) =>
    perk.card.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Rest of the code...
  return (
    <div className="w-full h-screen">
      <form class="flex items-center lg:max-w-4xl md:max-w-2xl max-w-sm mx-auto my-10">
        <label for="simple-search" class="sr-only">
          Search
        </label>
        <div class="relative w-full">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
              />
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            class="h-[50px] sm:h-[80px] bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for perks"
            onChange={handleSearch}
            required
          />
        </div>
      </form>

     {filteredPerks.map((perk) => (
        <PerkCard
          key={perk.id}
          name={perk.name}
          description={perk.description}
          discount={perk.discount}
          brand={perk.brand}
          card={perk.card}
          bank={perk.bank}
        />
      )
     )}
    </div>
  );
}

export default MainPage;
