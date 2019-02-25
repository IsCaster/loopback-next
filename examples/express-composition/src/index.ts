import {ExpressServer} from './server';
import {ApplicationConfig} from '@loopback/core';

export {ExpressServer};

export async function main(options: ApplicationConfig = {}) {
  const server = new ExpressServer(options);
  await server.boot();
  await server.start();
  console.log('Server is running at http://localhost:3000');
}
