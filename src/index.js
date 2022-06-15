import React from "react";
import { createRoot } from 'react-dom/client';
import pic from "./mountain1-01.jpg"; //import neccessary files
import { Header } from "./Header.js"
import { MainContent } from "./MainContent.js";
import { Footer } from "Footer.js";

const container = document.getElementById('root');  //setting up variables for root.render later
const root = createRoot(container);

export function Img() {
    return(
        <img src={pic} alt="A logo of a mountain" width="100px"/>
    )
}

export function Page() {
    return(
        <div>
          <Header />  
          <MainContent />
          <Footer />
        </div>
    )
  } // Put 'em all together

root.render(
    <Page />,
) //render it!