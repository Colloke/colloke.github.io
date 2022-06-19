import React from "react";
import { Img } from "./img.js";
import nav from "./Header-and-Footer.css";

export function Header() {
    return(
    <header>
        <nav className="nav">
        <Img />
        <ul className="navitems">
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        </nav>
    </header>
    )
}