foo(); // foo2
var foo = function () {
  console.log('foo1');
};

foo(); // foo1，foo重新赋值

function foo() {
  console.log('foo2');
}

foo(); // foo1
