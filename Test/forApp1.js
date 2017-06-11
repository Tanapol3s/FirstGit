/* global exports */

var pi = 3.14;

var update = function() {
  return "Update Server";  
};
var add = function(a, b) {
  return a+b;  
};

var obj = {};
obj.updateData = function() {
    console.log("Update Data.");
};
obj.deleteUser = function() {
    console.log("Deleted User.");
};

exports.pi = pi;
exports.add = add;
exports.update = update;
exports.data = obj;