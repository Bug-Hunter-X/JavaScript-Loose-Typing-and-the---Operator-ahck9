function foo(a,b){return a+b;}
console.log(foo(1,2)); //3
console.log(foo(1,"2")); //12
console.log(foo(true,2)); //3
console.log(foo(null,2)); //2
console.log(foo(undefined,2)); //NaN