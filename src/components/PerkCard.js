import React from "react";

function PerkCard() {
  return (
    <div className="bg-gray-800 rounded-2xl text-gray-100 max-w-md h-[200px] m-4 p-4 flex items-center justify-center">
      <div>
        <h1 className="text-2xl font-bold text-center pb-6">50% OFF</h1>
        <div className="grid grid-cols-2">
          <div>
            <p>Domino's</p>
            <p>Food</p>
          </div>
          <div>
            <p>Meezan Bank</p>
            <p>Visa Platinum Debit Card</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerkCard;
