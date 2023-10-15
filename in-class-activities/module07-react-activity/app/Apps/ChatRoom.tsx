import { useEffect,useState } from 'react';
import { createConnection } from './chat.js';

function ChatRoom(props:{ roomId:string }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, props.roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]);
  // ...
}