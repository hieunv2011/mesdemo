import { websocketDataAtom } from "../stores/websocketStore";
import { getDefaultStore } from "jotai";

let socket: WebSocket | null = null;

// Sử dụng store mặc định của Jotai để cập nhật atom
const store = getDefaultStore();

export const connectWebSocket = (machineId: string) => {
  const url = `ws://localhost:8080/${machineId}`;
  socket = new WebSocket(url);

  socket.onopen = () => {
    console.log("WebSocket connected:", url);
  };

  socket.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data);

      // Lưu dữ liệu vào Jotai atom
      store.set(websocketDataAtom, (prev: any) => ({
        ...prev,
        ...data,
      }));
    } catch (err) {
      console.error("Error parsing WebSocket message:", event.data);
    }
  };

  socket.onerror = (error) => {
    console.error("WebSocket error:", error);
  };

  socket.onclose = () => {
    console.log("WebSocket disconnected");
  };
};

export const disconnectWebSocket = () => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.close();
    socket = null;
  } else {
    console.log("WebSocket is not connected or already closed.");
  }
};

export const getSocket = () => socket;
