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

export function spiral(arr: number[][]) {
  let concatArr: number[] = [];
  while (arr.length !== 0) {
    concatArr = concatArr.concat(arr.shift() as number[]);
    for (let i = 0; i < arr.length; i++) {
      concatArr.push(arr[i].pop() as number);
    }
    if (arr.length !== 0) {
      const arrDown = arr.pop() as number[];
      concatArr = concatArr.concat(arrDown.reverse() as number[]);
      for (let i = arr.length - 1; i >= 0; i--) {
        concatArr.push(arr[i].shift() as number);
      }
    }
  }
  return concatArr;
}

function compareNumeric(a: string[], b: string[]): number {
  const length = a.length > b.length ? a.length : b.length;
  for (let i = 0; i < length; i++) {
    const na = Number(a[i]);
    const nb = Number(b[i]);
    if (na > nb) return 1;
    if (nb > na) return -1;
    if (!Number.isNaN(na) && Number.isNaN(nb)) return 1;
    if (Number.isNaN(na) && !Number.isNaN(nb)) return -1;
  }
  return 1;
}

export function semverSort(arr: string[]): string[] {
  const arrVersion = arr.map((item) => item.split("."));
  const arrVersionSort = arrVersion.sort(compareNumeric);
  return arrVersionSort.map((item) => item.join("."));
}

/*class Parallel  {
  constructor(a:number) {

  }

  jobs(...funcs:any[]) {
    const arrStreams:[] = []
    for(let i = 0; i < funcs.length; i++) {
      funcs[i]().then(function(result:number){
        arrStreams.push(result);
      });
    }
    return arrStreams;
  }
}
const runner = new Parallel(2);

console.log(runner
  .jobs(
    () => new Promise((resolve) => setTimeout(resolve, 10, 1)),
    () => new Promise((resolve) => setTimeout(resolve, 50, 2)),
    () => new Promise((resolve) => setTimeout(resolve, 20, 3)),
    () => new Promise((resolve) => setTimeout(resolve, 90, 4)),
    () => new Promise((resolve) => setTimeout(resolve, 30, 5)),
  )) // [1, 3, 2, 4, 5];*/
