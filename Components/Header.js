import React from "react";
import Link from "next/link";
// import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className="mt-8 h-8 p-5 px-40 flex items-center justify-between text-2xl">
        <Link href="/"><h1>Logo</h1></Link>
        <div className="flex gap-8">
        {/* <div className={`${styles.bli} flex gap-8`}>  // To apply css for the same page only */}
          <Link href="/"><h3>home</h3></Link>
          <Link href="/About"><h3>about</h3></Link>
          <Link href="/Projects"><h3>projects</h3></Link>
          <Link href="/Blogs"><h3>blog</h3></Link>
        </div>
      </div>
    </>
  )
}

export default Header;