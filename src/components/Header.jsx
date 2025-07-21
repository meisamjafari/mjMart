import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsBasketFill } from "react-icons/bs";
import { FaRegWindowClose } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen);

  return (
    <header className="w-full shadow-md sticky top-0 z-50 bg-white ">
      <div className="flex container  mx-auto justify-between items-center py-8 text-xl ">
        <div className="flex items-center gap-5 mr-10 md:mr-0">
          <button className="md:hidden " onClick={() => setIsMenuOpen(true)}>
            <TiThMenu className="text-red-600 text-3xl " />
          </button>

          <ul
            className={`flex flex-col w-full h-full bg-amber-100 fixed right-0 top-0 p-10 z-50 transform transition-all duration-500 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } `}
          >
            <button onClick={() => setIsMenuOpen(false)}>
              <FaRegWindowClose className="text-red-600 text-3xl " />
            </button>
            <li className="w-full border-b py-5">
              {" "}
              <Link
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-red-600 transition-all   "
                to={"/"}
              >
                خانه
              </Link>
            </li>
            <li className="w-full border-b py-5">
              <Link
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-red-600 transition-all "
                to={"/products"}
              >
                محصولات
              </Link>
            </li>
            <li className="w-full border-b py-5">
              <Link
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-red-600 transition-all "
                to={"/about"}
              >
                درباره ما
              </Link>
            </li>
            <li className="w-full border-b py-5">
              {" "}
              <Link
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-red-600 transition-all "
                to={"/contact"}
              >
                تماس با ما
              </Link>
            </li>

            <li className="w-full border-b py-5 sm:hidden">
              <Link
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center w-16 h-10  text-white rounded-lg text-center   bg-red-500 hover:bg-red-100 hover:text-red-500 transition-all"
                to={"/login"}
              >
                ورود
              </Link>
            </li>
            <li className="w-full border-b py-5 sm:hidden">
              <Link
                onClick={() => setIsMenuOpen(false)}
                className=" flex items-center justify-center w-16 h-10 text-xl text-white     rounded-lg text-center bg-red-500 hover:bg-red-100 hover:text-red-500 transition-all"
                to={"/cart"}
              >
                <BsBasketFill/>
              </Link>
            </li>
          </ul>

          <Link to={"/"}>
            <img className="w-48 " src="/logo1.png" alt="" />
          </Link>
        </div>
        <nav className=" md:gap-8 lg:gap-16 hidden  md:flex  ">
          <Link className="hover:text-red-600 transition-all  " to={"/"}>
            خانه
          </Link>
          <Link className="hover:text-red-600 transition-all" to={"/products"}>
            محصولات
          </Link>
          <Link className="hover:text-red-600 transition-all" to={"/about"}>
            درباره ما
          </Link>
          <Link className="hover:text-red-600 transition-all" to={"/contact"}>
            تماس با ما
          </Link>
        </nav>
        <div className="flex  gap-6  lg:gap-10 items-center">
          <Link
            className="py-1 px-2 hidden sm:block text-white rounded-lg text-center   bg-red-500 hover:bg-red-100 hover:text-red-500 transition-all"
            to={"/login"}
          >
            ورود
          </Link>
          <Link
            className="text-xl text-white hidden py-2 px-3 sm:block  rounded-lg text-center bg-red-500 hover:bg-red-100 hover:text-red-500 transition-all"
            to={"/cart"}
          >
            <BsBasketFill />
          </Link>
        </div>
      </div>
    </header>
  );
}
