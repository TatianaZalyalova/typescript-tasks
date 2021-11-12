type PartialArgs<T extends (...args: number[]) => number> = T extends (
  ...args: infer TArgs
) => number
  ? Partial<TArgs>
  : never;

type Curried<T extends (...args: any) => any, TReturn = ReturnType<T>> = <
  TArgs extends PartialArgs<T>,
  TRest extends number[]
>(
  ...args: TArgs
) => TRest extends [] ? TReturn : Curried<(...args2: number[]) => TReturn>;
export function curry<TFunc extends (...args: number[]) => number>(
  func: TFunc
): Curried<TFunc>;

export function curry(func: () => number) {
  return function curried(this: any, ...args: any) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return (...args2: number[]) => curried.apply(this, args.concat(args2));
    }
  };
}

interface ISum {
  (b: number): ISum;
  toString: () => number;
}

export function sum(a: number = 0): ISum {
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

export function spiral(arr: number[][]): number[] {
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
