const MemeCard = (props) => {
    const { meme } = props;
    return (
        <div className="game-card flex flex-col items-center hover:bg-dgreen" onClick={props.onClick.bind(null, meme.uuid)}>
            <div className="h-64 w-64 flex justify-center">
                <img src={meme.url} className="max-h-full rounded-lg" />
            </div>
            <p className="mt-8 font-bold text-xl text-center">{meme.name}</p>
        </div>
    );
};

export default MemeCard;
