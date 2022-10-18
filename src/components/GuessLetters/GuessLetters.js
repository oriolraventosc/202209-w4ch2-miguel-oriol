import "./GuessLetters.css";

const GuessLetters = ({ gameWord }) => {
  return (
    <ul className="guess-letters">
      <li
        className={gameWord[0] === "" ? "guess-letter empty" : "guess-letter"}
      >
        {gameWord[0]}
      </li>
      <li
        className={gameWord[1] === "" ? "guess-letter empty" : "guess-letter"}
      >
        {gameWord[1]}
      </li>
      <li
        className={gameWord[2] === "" ? "guess-letter empty" : "guess-letter"}
      >
        {gameWord[2]}
      </li>
      <li
        className={gameWord[3] === "" ? "guess-letter empty" : "guess-letter"}
      >
        {gameWord[3]}
      </li>
      <li
        className={gameWord[4] === "" ? "guess-letter empty" : "guess-letter"}
      >
        {gameWord[4]}
      </li>
      <li
        className={gameWord[5] === "" ? "guess-letter empty" : "guess-letter"}
      >
        {gameWord[5]}
      </li>
      <li
        className={gameWord[6] === "" ? "guess-letter empty" : "guess-letter"}
      >
        {gameWord[6]}
      </li>
    </ul>
  );
};

export default GuessLetters;
