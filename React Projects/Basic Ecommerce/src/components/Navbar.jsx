import { useEffect, useState } from "react";

const Navbar = ({ setSearchTerm }) => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`
    w-full flex items-center pb-4 sticky top-0
    transition-all duration-300 p-2 sm:px-4 sm:py-3 md:px-6 lg:px-32 border-b border-primary/30
    ${isSticky ? "bg-white/60 backdrop-blur-sm" : "bg-transparent "}
  `}
      >
        <div className="w-1/2">
          <h1 className="text-xl font-bold uppercase ">Spexxo</h1>
        </div>
        <div className="w-1/2">
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white  rounded-sm w-full p-2 outline-none"
            type="text"
            placeholder="Search product"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
