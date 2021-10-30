var Xray = require('x-ray');
var x = Xray();

x(
  'https://amazon.in',
  'title'
)(function (err, title) {
  console.log(title); // Google
});
