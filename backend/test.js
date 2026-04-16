//Test para crear password con hash

const b = require('bcryptjs');
b.hash('123456', 10).then(hash => console.log(hash));