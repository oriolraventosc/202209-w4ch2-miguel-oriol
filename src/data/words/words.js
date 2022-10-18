const words = [
  "radiation",
  "president",
  "bite",
  "candle",
  "contact",
  "mainstream",
  "childish",
];

const randomWord = () => {
  const randomIndex = Math.floor(Math.random() * words.length);
  const selectedWord = words[randomIndex];
  return selectedWord;
};

randomWord();
