import React from "react";

const Footer = () => {
    return (
        <>
        <footer className="py-16 flex flex-wrap gap-5 justify-evenly text-center md:{grid grid-rows-3 space-y-4} text-xl">
            <div>
                <h2>Logo</h2>
                <h4>&copy; 2024 All Rights Reserved</h4>
            </div>
            <div>
                <h4>Build with &hearts; By <a className="text-Decration-line underline" href="/">abnjain</a></h4>
            </div>
        </footer>
        </>
    )
}

export default Footer;