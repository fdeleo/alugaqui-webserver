const server = require('./server.js');

/* DEFAULT TEMPLATE FOR TESTINGS */
it ('should do X action', () => {
  var res = server.function();

  if (res !== expected) {
    throw new Error(`Expected ${expected}, but got ${res}.`)
  }
});

})
