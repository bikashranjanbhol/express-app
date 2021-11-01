// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send({
//     status: 'OK',
//   });
// });

// app.get('/test', (req, res) => {
//   res.send({
//     router: 'test',
//     status: 'OK',
//   });
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

var http = require('http');

consoler.log(Object.values(require('os').networkInterfaces()));

http
  .createServer(function (req, res) {
    res.write('Hello, Node.js!'); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

console.log('Server running on port 8080');
