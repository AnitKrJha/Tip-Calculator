function Header() {
  return (
    <nav className="max-w-full bg-purple-100 text-gray-900">
      <div className="2xl:container mx-auto text-center flex px-4">
        <div className="logo flex-initial w-20">
          <img
            src="https://cdn-icons-png.flaticon.com/128/732/732229.png"
            alt=""
            className=""
          />
        </div>
        <h1 className="heading text-center uppercase flex-1 text-3xl sm:text-4xl items-center flex justify-center">
          Tip Calculator
        </h1>
        <div className="links flex flex-initial items-center">
          <ul className="navlinks space-x-4 text-md hidden sm:flex">
            <a href="/"><li className="link hover:text-red-900 font-semibold">LINK</li></a>
            <a href="/"><li className="link hover:text-red-900 font-semibold">LINK</li></a>
            <a href="/"><li className="link hover:text-red-900 font-semibold">LINK</li></a>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
