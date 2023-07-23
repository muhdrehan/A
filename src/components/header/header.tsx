import React from "react";
import Logo from "@/images/logo.png";
import Image from "next/image";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineSearch } from "react-icons/hi";
import Cart from "@/images/cartIcon.png";

import { BiCaretDown } from "react-icons/bi";
import Link from "next/link";

const header = () => {
  return (
    <div className="w-full h-20 bg-amazon_blue text-lightText z-0 sticky top-0">
      <div className="w-full h-full mx-auto inline-flex items-center justify-between mdl:gap-3 px-4">
        <Link
          href={"/"}
          className="px-2 border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%] "
        >
          <Image className="w-28 object-cover mt-1" src={Logo} alt="Logo" />
        </Link>
        <div className="px-2 border-transparent hover:border-white cursor-pointer duration-300 items-center justify-center h-[70%] hidden xl:inline-flex gap-1">
          <MdOutlineLocationOn />
          <div className="text-xs">
            <p> Deliver to</p>
            <p className="text-white font-bold uppercase"> Pakistan</p>
          </div>
        </div>

        <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative">
          <input
            className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow"
            type="text"
            placeholder="Search Exciting Amazon Products"
          />
          <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center  absolute right-0 rounded-tr-md rounded-br-md">
            {" "}
            <HiOutlineSearch />
          </span>
        </div>
        <div className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]">
          <p> Hello Sign In </p>
          <p className="text-white font-bold flex item">
            {" "}
            Account & list
            <span>
              {" "}
              <BiCaretDown />{" "}
            </span>{" "}
          </p>
        </div>
        <div className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]">
          <p> Marked</p>
          <p className="text-white font-bodyFont "> & Favourites</p>
        </div>
        <Link
          href={"/Cart"}
          className=" flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative"
        >
          <Image className="w-auto object-cover h-8" src={Cart} alt=" cart" />
          <p className="text-xs text-white font-bold mt-3 "> Cart</p>
          <span className=" absolute text-amazon_yellow text-sm top-2 left-[29px] font-semibold">
            0
          </span>
        </Link>
      </div>
    </div>
  );
};

export default header;
