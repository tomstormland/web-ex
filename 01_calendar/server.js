var bs = require("browser-sync").create();

bs.init({
  files: [
    '*.html',
    '*.css',
    '*.js',
  ],
  server: "./"
});
