import React from "react";
import { Header } from "./Header and Footer/Header.js"
import { MainContent } from "./MainContent.js";
import { Footer } from "./Header and Footer/Footer.js";

export function Page() {
    return(
        <div>
          <Header />  
          <MainContent />
          <Footer />
        </div>
    )
  } // Put 'em all together