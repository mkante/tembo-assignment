import * as restify from 'restify';
import * as corsMiddleware from 'restify-cors-middleware';
import { addRoutes } from './routes';

const { log } = console;
const PORT = 8080;

const server = restify.createServer();

const cors = corsMiddleware({
  origins: ['*'],
  allowHeaders: ['*'],
  exposeHeaders: ['*'],
});

server.pre(cors.preflight);
server.use(cors.actual);
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());
server.use(restify.plugins.gzipResponse());

addRoutes(server);

(async (): Promise<void> => {
  server.listen(PORT, () => {
    log(`Server listening on http://localhost:${PORT}`);
  });
})();
