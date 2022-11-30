import { useState, useEffect } from "react";

function useWebSocket(url) {
    const [data, setData] = useState();
    const webSocket = new WebSocket(url);
    useEffect(() => {
        webSocket.onopen = () => {
            console.log('connected');
        }

        webSocket.onmessage = evt => {
            const message = JSON.parse(evt.data);
            setData(message.Items);
        }
    }, [])

    return data;
}

export default useWebSocket;