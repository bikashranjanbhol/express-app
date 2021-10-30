var Xray = require('x-ray');
var x = Xray();

x('https://dribbble.com', 'li.group', [
  {
    title: '.dribbble-img strong',
    image: '.dribbble-img [data-src]@data-src',
  },
])
  .paginate('.next_page@href')
  .limit(3)
  .then(function (res) {
    console.log(res[0]); // prints first result
  })
  .catch(function (err) {
    console.log(err); // handle error in promise
  });
