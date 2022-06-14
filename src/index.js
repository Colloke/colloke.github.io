import React from "react";
import { createRoot } from 'react-dom/client';
import pic from "./mountain1-01.jpg"; //import neccessary files

const container = document.getElementById('root');  //setting up variables for root.render later
const root = createRoot(container);

function Header() {
  return(
    <div>
        <img src={pic} alt="A logo of a mountain" width="100px"/> 
    </div>
  )
} // logo at top left as a react component

root.render(
    <Header />,
) //render it! The < /> turns it into a component