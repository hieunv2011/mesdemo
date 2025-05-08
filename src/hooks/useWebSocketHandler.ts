import { useEffect } from 'react';
import { connectWebSocket, disconnectWebSocket } from '../utils/ws';

const useWebSocketHandler = (topic: string, callback: (msg: any) => void) => {
  useEffect(() => {
    const handleMessage = (msg: any) => {
      if (msg.topic === topic) {
        callback(msg.data);
      }
    };

    connectWebSocket(topic, handleMessage);

    return () => {
      disconnectWebSocket();
    };
  }, [topic, callback]);
};

export default useWebSocketHandler;
