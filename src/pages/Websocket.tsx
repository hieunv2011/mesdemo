// import { useEffect } from "react";
// import { useAtom } from "jotai";
// import { websocketDataAtom } from "../stores/websocketStore";
// import { connectWebSocket, disconnectWebSocket } from "../utils/ws";

// const Websocket = () => {
//   const [websocketData] = useAtom(websocketDataAtom);

//   useEffect(() => {
//     connectWebSocket("M01");
//     return () => {
//       disconnectWebSocket();
//     };
//   }, []);

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-semibold mb-4">Dữ liệu từ WebSocket:</h1>
//       {websocketData ? (
//         <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
//           {JSON.stringify(websocketData, null, 2)}
//           {websocketData.oee}
//         </pre>
//       ) : (
//         <p>Đang chờ dữ liệu...</p>
//       )}
//     </div>
//   );
// };

// export default Websocket;

const Websocket = () => {
  return (
    <div>Websocket</div>
  )
}

export default Websocket