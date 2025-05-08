// utils/websocketManager.ts
import { websocketDataAtom } from '../stores/websocketStore';
import { getDefaultStore } from 'jotai';

let socket: WebSocket | null = null;
const store = getDefaultStore();

export const connectWebSocket = (machineId: string) => {
  const url = `ws://localhost:8080/${machineId}`;
  socket = new WebSocket(url);

  socket.onopen = () => {
    console.log('WebSocket connected:', url);
  };

  socket.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data);
      store.set(websocketDataAtom, data); // <== GHI VÀO ATOM Ở ĐÂY
    } catch (err) {
      console.error('Error parsing WebSocket message:', event.data);
    }
  };

  socket.onerror = (error) => {
    console.error('WebSocket error:', error);
  };

  socket.onclose = () => {
    console.log('WebSocket disconnected');
  };
};

export const disconnectWebSocket = () => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.close();
    socket = null;
  }
};

export const getSocket = () => socket;
