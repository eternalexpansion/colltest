function mergeArrays(...arrays) {
  const mergedArr = [].concat(...arrays);
  return Array.from(new Set(mergedArr));
}