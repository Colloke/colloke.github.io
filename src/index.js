import React from "react";
import { createRoot } from 'react-dom/client';
import pic from "./mountain1-01.jpg"; //import neccessary files

const container = document.getElementById('root');  //setting up variables for root.render later
const root = createRoot(container);

function Img() {
    return(
        <img src={pic} alt="A logo of a mountain" width="100px"/>
    )
}

function Header() {
    return(
    <header>
        <nav>
        <Img />
        </nav>
    </header>
    )
}

function MainContent() {
    return(
        
    )
}

function Footer() {
    return(
        <footer>
            <small>*_*</small>
        </footer>
    )
}

function Page() {
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