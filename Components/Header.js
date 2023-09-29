import Link from "next/link"
import React from "react"

const Header = () => {
    return(
        <>
            <div className="m-2 p-10 flex justify-between font-bold text-2xl">
                <h2>Logo</h2>
                <div className="gap-5 px-4 justify-between">
                    <Link href="/">Home</Link>
                    <Link href="/Projects">Projects</Link>
                    <Link href="/About">About</Link>
                    <Link href="/Blogs">Blogs</Link>
                </div>
            </div>
        </>
    )
}

export default Header;