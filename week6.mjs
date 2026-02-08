//Array function

export const intersection = (arr1, arr2) => {
  const set2 = new Set(arr2);
  return [...new Set(arr1.filter(el => set2.has(el)))];
};

//Pipe function
export const pipe = (...fns) => {
  return (initialValue) => {
    return fns.reduce((value, fn) => fn(value), initialValue);
  };
};

//Fibonacci function
export const fibonacci = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};