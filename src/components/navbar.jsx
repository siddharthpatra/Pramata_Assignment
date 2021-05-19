import React from "react";
import { ImHome } from "@react-icons/all-files/im/ImHome";
import { FaHandshake } from "@react-icons/all-files/fa/FaHandshake";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li className="navContent">
            <FaSearch />
          </li>
          <li className="navContent">
            <ImHome />
          </li>
          <li className="navContent">
            <FaHandshake />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
