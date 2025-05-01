/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let chars = s.split('');
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let foundVowels = [];

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(chars[i])) {
      foundVowels.push(chars[i]);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(chars[i])) {
      chars[i] = foundVowels.pop();
    }
  }

  return chars.join('');
};