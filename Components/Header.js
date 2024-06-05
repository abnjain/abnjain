"use client";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

// import styles from "./Header.module.css";
const Menu = ({ onClose }) => {
  const handleClick = () => {
    onClose(); // Close the menu when a menu item is clicked
  };

  return (
    <div className="md:flex items-center justify-end">
      <div className="md:flex justify-end space-x-4 gap-8">
        <Link href="/">
          <h3 onClick={handleClick}>HOME</h3>
        </Link>
        <Link href="/About">
          <h3 onClick={handleClick}>ABOUT</h3>
        </Link>
        <Link href="/Projects">
          <h3 onClick={handleClick}>PROJECTS</h3>
        </Link>
      </div>
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <div className="mt-8 flex flex-wrap justify-evenly items-center md:{grid grid-rows-3 space-y-4} gap-14 text-xl">
          <Link href="/">
            <Image
              src="/Images/favicon.png"
              width={60}
              height={60}
              className="justify-center align-middle"
            />
          </Link>

          <div className="w-20 hidden md:flex"></div>
          
          <div className="hidden md:flex">
          <Menu onClose={() => {}} />
          </div>

          <div className="py-4 px-6 flex items-center justify-between md:hidden">
            <div className="flex items-center md:hidden">
              <button onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          {isMenuOpen && <Menu onClose={toggleMenu} />}
          
          {/* <nav className={`menu md:flex items-center justify-end ${isMenuOpen ? "flex" : "hidden"}`}>
            <div className="md:flex justify-end space-x-4 gap-8">
                <Link href="/">
                  <h3>home</h3>
                </Link>
                <Link href="/About">
                  <h3>about</h3>
                </Link>
                <Link href="/Projects">
                  <h3>projects</h3>
                </Link>
            </div>
          </nav> */}

           {/*<div className="gap-8 hidden sm:flex">
            {/* <div className={`${styles.bli} flex gap-8`}>  // To apply css for the same page only */}
          {/* <Link href="/">
              <h3>home</h3>
            </Link>
            <Link href="/About">
              <h3>about</h3>
            </Link>
            <Link href="/Projects">
              <h3>projects</h3>
            </Link> */}
          {/* <Link href="/Blogs"><h3>blog</h3></Link> *
          </div> */}
        </div>
      </header>
    </>
  );
};

export default Header;
