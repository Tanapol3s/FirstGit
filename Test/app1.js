var response = require('./forApp1.js');
console.log(response.update());
console.log(response.data);
response.data.deleteUser();
response.data.updateData();