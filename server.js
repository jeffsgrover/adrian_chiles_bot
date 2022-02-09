path = require('path'),
      express = require('express'),
      http = require('http');

const app = express();
const server = http.Server(app);
const port = process.env.PORT || 8080;

app.use('/', express.static(path.join(__dirname, '')));

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`);
});