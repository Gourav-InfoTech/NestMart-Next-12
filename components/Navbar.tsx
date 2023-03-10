import React from "react";
import { MdWindow } from "react-icons/md";
import { RxCaretDown } from "react-icons/rx";
import { IoHeadsetOutline } from "react-icons/io5";
import { HiOutlineFire } from "react-icons/hi2";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="navbar py-3 appBarDivWidth">
        <div className="navLinks flex justify-between gap-4 items-center">
          <button className="catButton flex items-center gap-3 text-white text-sm rounded-md px-6 py-3 font-bold">
            <span>
              <MdWindow />
            </span>
            <p> Browse All Categories</p>
            <span>
              <RxCaretDown />
            </span>
          </button>
          <ul className="menu flex gap-7 text-base">
            <li className="flex items-center gap-2 mr-5">
              <span className="text-green-600 text-xl">
                <HiOutlineFire />
              </span>
              Deals
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/vendors">Vendors</Link>
            </li>
            <li>
              <Link href="/mega-menu">Mega Menu</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/pages">Pages</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>


            {/* <li>About</li>
            <li>Shop</li>
            <li>Vendors</li>
            <li>Mega Menu</li>
            <li>Blog</li>
            <li>Pages</li>
            <li>Contact</li> */}
          </ul>
        </div>
        <div className="navContact flex items-center">
          <span className="text-4xl mr-3">
            <IoHeadsetOutline />
          </span>
          <div>
            <h1 className="text-green-600 text-2xl">3435 - 3534</h1>
            <p className="text-xs text-zinc-500">24/7 Support Center</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
