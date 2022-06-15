import React from "react";
import { createRoot } from 'react-dom/client';
import { Page } from "./Page.js";

const container = document.getElementById('root');  //setting up variables for root.render later
const root = createRoot(container);

root.render(
    <Page />,
) //render it!