import logger from '../../src/core/Logger';
import { connect, disconnect } from '../../src/dao/PgClient';

const log = logger(__filename);

beforeAll(async () => {
  log.info('Test start');
  await connect();
});

beforeAll(async () => {
  await disconnect();
  log.info('Test complete');
});
