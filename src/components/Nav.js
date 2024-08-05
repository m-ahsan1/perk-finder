import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {

    width: '380px',
    height: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2d3748',
    margin: 'auto', // Add this line to center the modal
    borderRadius: '20px',
   
  },
};

function Nav() {
  
  const [formOpen, setFormOpen] = useState(false);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {

  }

  function closeModal() {
    setIsOpen(false);
  }

 
  return (
    <div>

    <nav className="bg-slate-900 text-white w-full h-[80px] flex items-center">
      <ul className="w-full flex flex-row items-center justify-between">
        <li className="m-2 p-2 font-mono font-semibold text-2xl hover:scale-105 duration-300">
          <a href="/">PerkFinder</a>
        </li>

        <button className="bg-green-500 rounded-full m-2 p-3 px-6 hover:scale-105 duration-300 font-semibold" onClick={openModal}>
          <p>Add Offer</p>
        </button>
      </ul>
    </nav>
 
   <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      
        <div className="bg-[#2d3748] text-[#2d3748] flex flex-col items-center">
        
          <form className="w-full flex flex-col items-center justify-between">
            <select className="m-2 p-2 font-mono font-semibold text-2xl hover:scale-105 duration-300">
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
              <option value="Fashion">Fashion</option>
              <option value="Electronics">Electronics</option>
              <option value="Health">Health</option>
              <option value="Sports">Sports</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Home">Home</option>
              <option value="Automotive">Automotive</option>
              <option value="Education">Education</option>
              <option value="Other">Other</option>
            </select>
            <input type="text" placeholder="Description" className="m-2 p-2 font-mono font-semibold text-2xl hover:scale-105 duration-300" />
            <input type="text" placeholder="Discount" className="m-2 p-2 font-mono font-semibold text-2xl hover:scale-105 duration-300" />
            <input type="text" placeholder="Brand" className="m-2 p-2 font-mono font-semibold text-2xl hover:scale-105 duration-300" />
            <input type="text" placeholder="Card" className="m-2 p-2 font-mono font-semibold text-2xl hover:scale-105 duration-300" />
            <input type="text" placeholder="Bank" className="m-2 p-2 font-mono font-semibold text-2xl hover:scale-105 duration-300" />
            <button className="bg-green-500 rounded-full m-2 p-3 px-6 hover:scale-105 duration-300 font-semibold" onClick={closeModal}>
              <p>Submit</p>
            </button>
          </form>
        </div>
        </Modal>
   </div>
    
  );
}


export default Nav;
