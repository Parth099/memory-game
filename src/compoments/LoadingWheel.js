import { useState, useEffect } from "react";

const LoadingWheel = (props) => {
    const [showLoading, setShowLoading] = useState(true);
    const setLoadingFalse = setShowLoading.bind(null, false);

    useEffect(() => {
        // loading != 0 signals either failure of call or success
        if (props.isLoading !== 0) {
            setTimeout(() => {
                setLoadingFalse();
                props.showGame();
            }, 2500);
        }
    }, [props.isLoading, setLoadingFalse]);

    return (
        <div className="mt-5 mx-10 text-white">
            {showLoading && (
                <div className="flex flex-col items-center mt-10">
                    <p className="text-4xl font-bold items-center">The Game is Loading</p>
                    <div className="loader mt-10"></div>
                </div>
            )}
        </div>
    );
};
export default LoadingWheel;
