import React from "react";
import Random_Number_Generator from "./Random_Number_Generator/RandNumGen";
import VideoPlayer from "./VideoPlayer/VideoPlayer";

export function MainContent() {
    return (
        <div>
        <Random_Number_Generator />
        <VideoPlayer />
        </div>
    )
}