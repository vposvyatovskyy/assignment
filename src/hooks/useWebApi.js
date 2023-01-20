import { useCallback, useEffect, useState } from "react";

function useWebApi() {
    const [exchangeData, setExchangeData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchExchangeDataHandler = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await fetch('http://webtask.future-processing.com:8068/currencies');
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();

            setExchangeData(data);
        }
        catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    });

    useEffect(() => {
        fetchExchangeDataHandler();
    }, [fetchExchangeDataHandler]);

    return exchangeData;
}

export default useWebApi;