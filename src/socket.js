import { io } from "socket.io-client";

const URL = typeof window !== 'undefined' 
  ? (process.env.NODE_ENV === 'production' 
    ? 'https://drawing-tool-backend.onrender.com'
    : process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:5000')
  : '';

export const socket = io(URL, {
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  reconnectionAttempts: 5,
  transports: ['websocket', 'polling'],
  autoConnect: true,
  secure: process.env.NODE_ENV === 'production' ? true : false,
});

socket.on('connect_error', (error) => {
  console.error('Socket connection error:', error);
});

socket.on('disconnect', (reason) => {
  console.log('Socket disconnected:', reason);
});