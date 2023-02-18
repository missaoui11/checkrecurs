function isPalindrome(word) {
  word = word.replace(/[^a-z0-9]/gi, '').toLowerCase();
  if (word.length <= 1) {
    return true;
  }
  if (word[0] !== word[word.length - 1]) {
    return false;
  }
  return isPalindrome(word.substring(1, word.length - 1));
}
