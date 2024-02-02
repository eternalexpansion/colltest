function findLongestWord(str) {
let longAhhWord = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > longAhhWord.length) {
      longAhhWord = str[i];
    }
  }
  return longAhhWord;
}
