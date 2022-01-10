import { useEffect, useState } from "react";

const MemGame = (props) => {
    const [memes, setMemes] = useState([]);

    const genNUniqueRanNums = (n, limit) => {
        if (n > limit) return;
        const uniqNums = new Set();
        while (uniqNums.size != n) {
            uniqNums.add(Math.floor(Math.random() * limit));
        }
        return [...uniqNums];
    };

    useEffect(() => {
        const uniqNums = genNUniqueRanNums(5, props.data.length);
        //sets meme array to random memes from the API array
        setMemes(
            uniqNums.map((num) => {
                const memeData = props.data[num];
                const { name, url } = memeData;
                return { name, url };
            })
        );
    }, []);

    return (
        <div className="text-swhite grid md:grid-cols-3 gap-4 lg:grid-cols-5">
            {console.log(memes)}
            {memes.map((meme, idx) => {
                return (
                    <div className="game-card flex flex-col items-center hover:bg-dgreen" key={idx}>
                        <div className="h-64 w-64 flex justify-center">
                            <img src={meme.url} className="max-h-full rounded-lg" />
                        </div>
                        <p className="mt-8 font-bold text-xl text-center">{meme.name}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default MemGame;
