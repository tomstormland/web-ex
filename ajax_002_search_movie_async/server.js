const bs = require("browser-sync").create();
const path = require('path');
const { spawn } = require('child_process');

const server = spawn('php', ['-S', '127.0.0.1:8000', '-t', 'public/'], {
  cwd: __dirname,
  stdio: [ 'ignore', 'inherit', 'inherit' ],
});


bs.init({
  files: [
    'public/*.html',
    'public/*.css',
    'public/*.js',
  ],
  proxy: '127.0.0.1:8000',
});
