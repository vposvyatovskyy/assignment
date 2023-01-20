import { useCallback, useEffect, useState } from "react";

function useFetchUserData(email) {
    const [userData, setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchUserHandler = useCallback(async () => {
        setIsLoading(true);
        if (email != undefined) {
            try {
                const response = await fetch(`https://localhost:7044/api/Users/${email}`);
                if (!response.ok) {
                    throw new Error('Something went wrong!');
                }

                const data = await response.json();

                setUserData(data);
            }
            catch (error) {
                console.log(error);
            }
            setIsLoading(false);
        }
    });

    useEffect(() => {
        fetchUserHandler();
    }, [fetchUserHandler]);

    return userData;
}

export default useFetchUserData;