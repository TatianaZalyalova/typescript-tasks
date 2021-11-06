export function curry(func: () => number) {
  return function curried(this: any, ...args: any) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return (...args2: number[]) => curried.apply(this, args.concat(args2));
    }
  };
}

export function sum(a: number = 0) {
  let currentSum = a;
  function f(b: number) {
    currentSum += b;
    return f;
  }
  f.toString = function () {
    return currentSum;
  };
  return f;
}

/*alert( sum(1)(2) ); // 3
  alert( sum(5)(-1)(2) ); // 6
  alert( sum(6)(-1)(-2)(-3) ); // 0
  alert( sum(0)(1)(2)(3)(4)(5) ); // 15*/

/*const s = sum();
alert(s(1)); // 1
alert(s(1)(2)); //3
alert(s(3)(4)(5)); // 12

const s3 = sum(3);

alert(s3(5)); // 8
alert(s3(6)); // 9*/

