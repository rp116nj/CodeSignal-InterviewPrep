//Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.
function firstNotRepeatingCharacter(s) {
  let newObj = {};
  for (let char of s) {
    if (!newObj[char]) {
      newObj[char] = 1;
    } else {
      newObj[char]++;
    }
  }
  for (let key in newObj) {
    if (newObj[key] === 1) return key;
  }
  return '_';
}
