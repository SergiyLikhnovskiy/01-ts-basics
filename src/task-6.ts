function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<string>(["a", "b", "c"]); // "a"
getFirstElement<number>([1, 2, 3]); // 1
getFirstElement<boolean>([true, false, true]); // true
