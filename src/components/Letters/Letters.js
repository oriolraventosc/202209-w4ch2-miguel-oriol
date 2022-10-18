import "./Letters.css";

const Letters = () => {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <ul className="letters">
      {alphabet.map((letter) => {
        return (
          <li key={letter} className="letter">
            <a href="#none">{letter}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Letters;
