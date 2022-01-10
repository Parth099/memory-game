import { useState } from "react";

import NavHead from "./compoments/navhead";
import useFetch from "./hooks/useFetch";
import LoadingWheel from "./compoments/LoadingWheel";
import MemGame from "./compoments/memGame";

export default function App() {
    const [isLoading, fetchedData] = useFetch("https://api.imgflip.com/get_memes", []);
    const [showGame, setShowGame] = useState(false);
    return (
        <div className="text-sblue sp-font-2">
            <NavHead />
            <div className="bg-dgreen rounded-lg mt-12 px-5 py-3 text-xl flex flex-col px-3 align">
                <span className="font-bold  text-3xl">Directions</span>
                <span>
                    To increase your score click on <span className="font-semibold">Meme</span> you have not clicked on before
                </span>
            </div>
            {isLoading === -1 && (
                <div className="bg-dgreen rounded-lg px-5 py-3 text-xl flex flex-col px-3 align">
                    <span className="font-semibold">The Game has failed to load.</span>
                    This is can result from a change in the API or its downtime.
                </div>
            )}
            {isLoading !== -1 && (
                <div className="text-white align">
                    <LoadingWheel isLoading={isLoading} showGame={setShowGame.bind(null, true)} />
                </div>
            )}

            {/* 
            see that here we can simply use the showGame: bool var since we are using 2 bools to represnet a 3 state system
            for the game to be playable we require both bools are true [dataLoaded] & [loading done]
            */}

            <div className="align">{showGame && <MemGame data={fetchedData.data.memes} />}</div>
        </div>
    );
}
