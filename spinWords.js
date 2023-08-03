function spinWords(string) {
  const letters = string.split("");

  if (letters.length > 4) {
    return letters.reverse().join("");
  } else {
    return string;
  }
}

module.exports = spinWords;
