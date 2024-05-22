import express from 'express';
import http from 'http';
import serverConfig from '../src/frameworks/webserver/server.js';
import expressConfig from '../src/frameworks/webserver/express.js'

const app = express();
const server = http.createServer(app);

//* express config connection
expressConfig(app);

//* starting the server with server config
serverConfig(server).startServer();
