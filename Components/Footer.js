import Link from "next/link"
import React from "react"

const Footer = () => {
    return(
        <>
            <main>
                <div className="nav">
                    <h2>Logo</h2>
                    <div className="nav_list">
                        <Link href="/">home</Link>
                        <Link href="/Projects">projects</Link>
                        <Link href="/About">about</Link>
                        <Link href="/Blogs">blogs</Link>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Footer;