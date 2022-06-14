import React from "react";
import { createRoot } from 'react-dom/client';
import pic from "./mountain1-01.jpg"

const container = document.getElementById('root');
const root = createRoot(container);

const app = (
    <div>
        <img src={pic} alt="A logo of a mountain" width="100px"/>
    </div>
)

root.render(
    app,
)