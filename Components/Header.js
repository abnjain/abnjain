import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="mt-8 h-8 p-5 px-40 flex items-center justify-between text-2xl">
        <Link href="/"><h1>Logo</h1></Link>
        <div className="flex gap-8">
          <Link href="/">home</Link>
          <Link href="/About">about</Link>
          <Link href="/Projects">projects</Link>
          <Link href="/Blog">blog</Link>
        </div>
      </div>
    </>
  )
}

export default Header;