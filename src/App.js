import { useState } from "react";

import NavHead from "./compoments/navhead";
import useFetch from "./compoments/useFetch";
import LoadingWheel from "./compoments/LoadingWheel";

export default function App() {
    const [isLoading, fetchedData] = useFetch("https://api.imgflip.com/get_memes", []);
    const [showGame, setShowGame] = useState(false);
    return (
        <div className="bg-sblue text-sblue sp-font-2 h-screen">
            <NavHead />
            <div className="bg-dgreen rounded-lg mt-12 px-5 py-3 text-xl flex flex-col px-3 mx-10">
                <span className="font-bold  text-3xl">Directions</span>
                <span>
                    To increase your score click on <span className="font-semibold">%Object</span> you have not clicked on before
                </span>
            </div>
            {isLoading === -1 && (
                <div className="bg-dgreen rounded-lg mt-5 mx-10 px-5 py-3 text-xl flex flex-col px-3 ">
                    <span className="font-semibold">The Game has failed to load.</span>
                    This is can result from a change in the API or its downtime.
                </div>
            )}
            {isLoading !== -1 && (
                <div className="mt-5 mx-10 text-white">
                    <LoadingWheel isLoading={isLoading} showGame={setShowGame.bind(null, true)} />
                </div>
            )}

            {/* 
            see that here we can simply use the showGame: bool var since we are using 2 bools to represnet a 3 state system
            for the game to be playable we require both bools are true [dataLoaded] & [loading done]
            */}

            {showGame && <div className="mt-5 mx-10 text-white">Hey</div>}
        </div>
    );
}
