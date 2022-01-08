import { useState, useEffect } from "react";
const useFetch = (url, dependencyArr) => {
    const [isLoading, setIsLoading] = useState(0);
    const [fetchedData, setFetchedData] = useState(null);

    useEffect(() => {
        console.log("sent req");
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                setIsLoading(1);
                setFetchedData(responseJson);
                console.log("done");
            })
            .catch((err) => {
                setIsLoading(-1);
                console.log(err);
            });
    }, [...dependencyArr, url]);

    return [isLoading, fetchedData];
};

export default useFetch;
