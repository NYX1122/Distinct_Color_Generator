import app from './app.js';

const run = async function () {
  const colors = await app(5);
};

run();
