import React from "react";
import { NavLink } from "react-router-dom";
import { LINKS } from "../../static";
import logo from "../../assets/logo.svg";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";

const Header = () => {
  return (
    <header
      id="header"
      className="bg-white opacity-95 border sticky top-0 z-50"
    >
      <nav className="container flex justify-between gap-4 p-4 bg-white text-slate-900">
        <NavLink to="/" className="text-xl">
          <img src={logo} alt="Logo" />
        </NavLink>
        <div className="text-base font-[500] flex items-center gap-2 max-md:gap-1 max-md:text-sm whitespace-nowrap">
          {LINKS.map((link) => (
            <NavLink key={link.id} to={link.path} className="px-5 max-md:px-2">
              {link.icon}
              <span>{link.name}</span>
            </NavLink>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-3">
          <NavLink to="/login" className="relative">
            <HiOutlineUser className="w-full h-full" />
            <span className="absolute right-0 -mr-1 top-0 rounded-full bg-[#56B280] px-1 py-0 text-xs text-white"></span>
          </NavLink>
          <NavLink to="/cart" className="relative">
            <IoCartOutline className="w-full h-full" />
            <span className="absolute right-0 -mr-1 top-0 rounded-full bg-[#56B280] px-1 py-0 text-xs text-white"></span>
          </NavLink>
          <NavLink to="/wishlist" className="relative">
            <FaRegHeart className="w-full h-full" />
            <span className="absolute right-0 -mr-1 top-0 rounded-full bg-[#56B280] px-1 py-0 text-xs text-white"></span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
