/**
 * 函数优先级高于变量
 */

foo(); // foo2

function foo() {
  console.log('foo1');
}

foo(); // foo2

function foo() {
  console.log('foo2');
}

foo(); // foo2
