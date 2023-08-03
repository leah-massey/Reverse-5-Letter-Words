function spinWords(string) {
  const words = string.split(" ");
  let newString = [];

  words.forEach((word) => {
    const letters = word.split("");

    if (letters.length > 4) {
      newString.push(letters.reverse().join(""));
    } else {
      newString.push(letters.join(""));
    }
  });

  return newString.join(" ");
}

module.exports = spinWords;
