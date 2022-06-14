import React from "react";
import { Img } from "./index.js";

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