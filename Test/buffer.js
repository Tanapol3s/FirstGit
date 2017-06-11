var buf = new Buffer(3);
buf.write('a');
console.log(buf.toString());
buf.write('b');
console.log(buf.toString());