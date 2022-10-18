const words = [
  "habitat",
  "macacos",
  "testing",
  "vacancy",
  "contact",
  "rabbits",
  "iceberg",
  "abduced",
  "acolyte",
  "baboons",
  "backlog",
  "balling",
];

export const randomWord = () => {
  const randomIndex = Math.floor(Math.random() * words.length);
  const selectedWord = words[randomIndex];
  return selectedWord;
};
