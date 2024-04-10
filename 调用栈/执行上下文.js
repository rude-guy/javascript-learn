var a = 'Hello World!';

function first() {
  console.log('Inside first function');
  var b = 'hello';
  second();
  console.log('Again inside first function');
}

function second() {
  console.log(b);
  console.log('Inside second function');
}

first();
console.log('Inside Global Execution Context');
