function Nav() {
  return (
    <nav className="bg-slate-900 text-white w-full h-[80px] flex items-center">
      <ul className="w-full flex flex-row items-center justify-between">
        <li className="m-2 p-2 font-mono font-semibold text-2xl hover:scale-105 duration-300">
          <a href="/">PerkFinder</a>
        </li>

        <button className="bg-green-500 rounded-full m-2 p-3 px-6 hover:scale-105 duration-300 font-semibold">
          <p>Add Offer</p>
        </button>
      </ul>
    </nav>
  );
}

export default Nav;
