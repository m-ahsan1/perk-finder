import React from "react";
import ReactCardFlip from "react-card-flip";

function PerkCard({category, description, discount, brand, card, bank}) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  return (
    <div>
      <ReactCardFlip flipDirection="vertical" isFlipped={isFlipped}>
        <div
          className="bg-gray-800 rounded-2xl text-gray-100 max-w-md h-[200px] m-4 p-4 flex items-center justify-center"
          onClick={flipCard}
        >
          <div>
            <h1 className="text-2xl font-bold text-center pb-6">{discount}% OFF</h1>
            <div className="grid grid-cols-2">
              <div className="">
                <p className="my-2 w-fit bg-green-500 font-semibold rounded-full p-2 text-center">
                  {brand}
                </p>
                <p className="w-fit bg-green-500 font-semibold rounded-full p-2">
                  {category}
                </p>
              </div>
              <div className="">
                <p className="my-2 w-fit bg-green-500 font-semibold rounded-full p-2">
                  {bank}
                </p>
                <p className="w-fit bg-green-500 font-semibold rounded-full p-2">
                  {card}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-gray-800 rounded-2xl text-gray-100 max-w-md h-[200px] m-4 p-4 flex items-center justify-center"
          onClick={flipCard}
        >
          <div>
            <h1 className="font-semibold text-lg py-2">Terms & Conditions</h1>
            <p>{description}</p>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default PerkCard;
