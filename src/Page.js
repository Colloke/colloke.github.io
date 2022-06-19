import React from "react";
import { Header } from "./Header_and_Footer/Header.js";
import { MainContent } from "./MainContent.js";
import { Footer } from "./Header_and_Footer/Footer.js";

export function Page() {
    return(
        <div>
          <Header />  
          <MainContent />
          <Footer />
        </div>
    )
  } // Put 'em all together