import React from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { links } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { openNav } from "../slice/navbarSlice";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const dispatch = useDispatch();
  const {isOpen} = useSelector(state => state.navbar)
  const { loginWithRedirect } = useAuth0();
  return (
    <nav className="py-5">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex justify-between w-full lg:w-auto">
            <Link href="/">
              <a>
                <img src="/logo.svg" alt="logo" className="w-44" />
              </a>
            </Link>
            <button className="lg:hidden text-3xl" onClick={() => dispatch(openNav())}> 
              <FaBars />
            </button>
          </div>
          <div>
            <ul className="hidden lg:flex items-center">
              {console.log(links)}
              {links.map((link) => {
                const { id, text, url } = link;
                return (
                  <li className="pl-10 capitalize text-lg" key={id}>
                    <Link href={url}>
                      <a>{text}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="hidden lg:flex items-center">
            <Link href="/cart">
              <a className="flex capitalize text-lg">
                <AiOutlineShoppingCart />
              </a>
            </Link>
            <span className="px-2 text-lg">cart</span>
            
              <a className="flex pl-5" href="/api/auth/login">
                <AiOutlineUserAdd />
              </a>
            
            <span className="px-2 text-lg">login</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
