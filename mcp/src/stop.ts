import { WebSocket } from 'ws';

const PORT = Number(process.env.MELODUO_PORT ?? 8787);
const ws = new WebSocket(`ws://127.0.0.1:${PORT}/agent`);
ws.on('open', () => (ws.send(JSON.stringify({ type: 'quit' })), console.log(`bridge on ${PORT} stopped`), setTimeout(() => process.exit(0), 100)));
ws.on('error', () => (console.log(`no bridge on ${PORT}`), process.exit(0)));
