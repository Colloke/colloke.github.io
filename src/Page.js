import React from "react";
import { Header } from "./Header.js"
import { MainContent } from "./MainContent.js";
import { Footer } from "./Footer.js";

export function Page() {
    return(
        <div>
          <Header />  
          <MainContent />
          <Footer />
        </div>
    )
  } // Put 'em all together