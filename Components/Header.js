import Link from "next/link"
import React from "react"

const Header = () => {
    return(
        <>
            <main>
                <div className="nav">
                    <h2>Logo</h2>
                    <div className="nav_list">
                        <Link className="navLinks" href="/">home</Link>
                        <Link className="navLinks" href="/Projects">projects</Link>
                        <Link className="navLinks" href="/About">about</Link>
                        <Link className="navLinks" href="/Blogs">blogs</Link>
                        <i className="nav_list_i nav_list_i_light ri-sun-fill"></i>
                        <i className="nav_list_i nav_list_i_dark ri-contrast-2-fill"></i>
                        <i className="nav_list_i nav_list_i_menu ri-menu-3-fill"></i>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Header;