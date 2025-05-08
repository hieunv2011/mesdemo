let socket: WebSocket | null = null;

export const connectWebSocket = (topic: string, handleMessage: (msg: any) => void) => {
  socket = new WebSocket('ws://your-websocket-url');

  socket.onopen = () => {
    console.log(`WebSocket connected to topic: ${topic}`);
    socket?.send(JSON.stringify({ action: 'subscribe', topic }));
  };

  socket.onmessage = (event) => {
    const message = JSON.parse(event.data);
    handleMessage(message);
  };

  socket.onclose = () => {
    console.log('WebSocket disconnected');
  };
};

export const disconnectWebSocket = () => {
  if (socket) {
    socket.close();
    socket = null;
  }
};