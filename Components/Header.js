import React from "react";
import Link from "next/link";
import Image from "next/image";
// import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className="mt-8 py-6 flex flex-wrap justify-evenly items-center md:{grid grid-rows-3 space-y-4} text-2xl">
        <Link href="/">
          <Image 
            src="/Images/favicon.png"
            width={60}
            height={60}
            className="justify-center align-middle"
          />
        </Link>
        <div className="w-72 hidden md:flex"></div>
        <div className="gap-8 hidden sm:flex">
        {/* <div className={`${styles.bli} flex gap-8`}>  // To apply css for the same page only */}
          <Link href="/"><h3>home</h3></Link>
          <Link href="/About"><h3>about</h3></Link>
          <Link href="/Projects"><h3>projects</h3></Link>
          {/* <Link href="/Blogs"><h3>blog</h3></Link> */}
        </div>
      </div>
    </>
  )
}

export default Header;