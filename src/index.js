import React from "react";
import { createRoot } from 'react-dom/client';
import pic from "./mountain1-01.jpg"; //import neccessary files

const container = document.getElementById('root');  //setting up variables for root.render later
const root = createRoot(container);

function Header() {
  return(
    <div>
        <header>
        <nav>
        <img src={pic} alt="A logo of a mountain" width="100px"/>
        </nav> 
        </header>
        <footer>
            <small>*_*</small>
        </footer>
    </div>
  )
} // everything as one big component

root.render(
    <Header />,
) //render it! The < /> turns it into a component