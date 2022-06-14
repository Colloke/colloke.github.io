import React from "react";
import { createRoot } from 'react-dom/client';
import pic from "./mountain1-01.jpg"; //import neccessary files

const container = document.getElementById('root');  //setting up variables for root.render later
const root = createRoot(container);

const header = (
    <div>
        <img src={pic} alt="A logo of a mountain" width="100px"/> 
    </div>
) // logo top left

root.render(
    header,
) //render it!