import PropTypes from "prop-types";
import { logo , menu_open , menu_close } from "../assets";
import { useState, useEffect } from "react";
import { List } from "./common";

export const Navbar = ({ MenuItems }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <header
      className={` w-full text-very-dark-blue text-2xl Tablet:text-inherit  Tablet:text-dark-grayish-blue capitalize sticky top-0 left-0 right-0 ${
        isScrolled
          ? " Desktop:w-full   shadow-[0px_2px_15px] shadow-very-dark-grayish-blue p-[1.9rem_2.1rem] bg-white  "
          : "  px-5 py-5 Tablet:px-0  Tablet:py-[2rem]   Tablet:pt-[3rem] Tablet:pb-[3.7rem]    "
      } transition-[0.5s] m-auto Desktop:w-[70rem]    `}
    >
      <nav className=" flex flex-row justify-between items-center gap-5 Mobile:gap-0 ">
        <a href="#">
          <img className=" w-[3rem]  Mobile:w-full  " src={logo} alt="logo" />
        </a>
        <button
          className={`block Tablet:hidden z-10 `}
          onClick={() => setOpenMenu((preval) => !preval)}
        >
          <img src={openMenu ?  menu_close : menu_open} alt="menu" />
        </button>
        <div

          className={`${
            openMenu
              ? "  top-0  fixed bottom-0  translate-x-[27%] bg-off-white  shadow-[#000000a4] shadow-[0rem_0rem_0rem_20rem] Tablet:translate-x-0 Tablet:shadow-none  left-0 right-0 Tablet:static Tablet:bg-transparent  Tablet:p-0 Tablet:m-0 "
              : "hidden"
          }  Tablet:block transition-all Tablet:z-0 `}
        >

          <ul
            className={`flex flex-col  justify-center Tablet:items-start items-start gap-3 Tablet:flex-row  Tablet:gap-12 p-[8rem_1.6rem] Tablet:p-0 Tablet:text-lg text-very-dark-blue Tablet:text-dark-grayish-blue `}
          >
            {MenuItems?.map((data, index) => (
              <List key={index} label={data.label} isActive={data.isActive} />
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
Navbar.propTypes = {
  MenuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      isActive: PropTypes.bool,
    })
  ).isRequired,
};