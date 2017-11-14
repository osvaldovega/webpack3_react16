/* eslint-disable */
const exec = require('child_process').exec;

exec('node -v', function (err, stdout) {
  console.log('\nChecking node version...');

  if (err) throw err;

  if (parseFloat(stdout.slice(1)) < 4) {
    throw new Error('React Slingshot requires node 6.0 or greater.');
  }

  console.log('Node version is ok.\n');
});
