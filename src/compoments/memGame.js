import { useEffect, useState } from "react";
import MemeCard from "./memeCard";
import uniqid from "uniqid";

const MemGame = (props) => {
    const [memes, setMemes] = useState([]);
    const [hash, setHash] = useState(new Map()); //the knows what been clicked or not
    const [gameLevel, setGameLevel] = useState(1);
    const [length, setLength] = useState(5);

    const genNUniqueRanNums = (n, limit) => {
        if (n > limit) return;
        const uniqNums = new Set();
        while (uniqNums.size != n) {
            uniqNums.add(Math.floor(Math.random() * limit));
        }
        return [...uniqNums];
    };

    useEffect(() => {
        const uniqNums = genNUniqueRanNums(gameLevel + 4, props.data.length);
        //sets meme array to random memes from the API array
        setMemes(
            uniqNums.map((num) => {
                const { name, url } = props.data[num]; //etx the right info
                const uuid = uniqid();
                setHash((prev) => new Map([...prev, [uuid, 1]]));
                return { name, url, uuid };
            })
        );
    }, [gameLevel]);

    useEffect(() => {
        if (length === 0) {
            console.log("W");
            //need to start new GAME
        }
    }, [length]);

    const onClick = (uuid) => {
        const isClicked = hash.get(uuid) === 0;
        if (!isClicked) {
            setHash((prev) => new Map(prev).set(uuid, 0));
            setLength(length - 1);
        } else {
            //Loss :
            setHash((prev) => {
                //de-activiates the onClick event since none will be eq to 1 now
                const mapArray = [...prev];
                const sum = mapArray.reduce((prev, current) => prev + current[1], 0);
                if (sum === 0) return prev; //no need to change we already did
                mapArray.forEach((arr) => (arr[1] = 0));
                return new Map([...mapArray]);
            });
        }
    };

    return (
        <div className="text-swhite">
            <div className="font-light text-5xl score-font flex gap-12 justify-center mb-12">
                <p>Score</p>
                <p>High Score</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 lg:grid-cols-5">
                {memes.map((meme, idx) => {
                    return <MemeCard meme={meme} key={idx} onClick={onClick} />;
                })}
            </div>
        </div>
    );
};

export default MemGame;
