const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
<<<<<<< HEAD
  const msg = 'Hello Node is version new 5555!\n'
=======
  const msg = 'Maybe you were one of the floating souls in heaven. But I’m so lucky that I’ve found you as my sweet sister. Happy Birthday.!\n'
>>>>>>> 40e0b5c8a7df9ac4b024ed0f2e4aae5fd4186da8
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
