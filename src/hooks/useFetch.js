function useFetch() {
    const [currencies, setCurrencies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchMoviesHandler = useCallback(async () => {
        setIsLoading(true);

        try {
            const response = await fetch('http://webtask.future-processing.com:8068/currencies');
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();
            const transformedData = data.items.map((data) => {
                return {
                    code: data.code,
                    unit: data.unit,
                    sellPrice: data.sellPrice
                }
            });

            setCurrencies(data);
        }
        catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    });

    useEffect(() => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler]);

}