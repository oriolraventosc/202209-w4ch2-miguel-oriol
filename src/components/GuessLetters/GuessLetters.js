import "./GuessLetters.css";

const GuessLetters = ({ gameWord }) => {
  return (
    <ul className="guess-letters">
      <li className={"guess-letter empty guess-letter"}>
        {gameWord[0].replace(gameWord[0], "")}
      </li>
      <li className={"guess-letter empty guess-letter"}>{gameWord[1]}</li>
      <li className={"guess-letter empty guess-letter"}>
        {gameWord[2].replace(gameWord[2], "")}
      </li>
      <li className={"guess-letter empty guess-letter"}>{gameWord[3]}</li>
      <li className={"guess-letter empty guess-letter"}>
        {gameWord[4].replace(gameWord[4], "")}
      </li>
      <li className={"guess-letter empty guess-letter"}>{gameWord[5]}</li>
      <li className={"guess-letter empty guess-letter"}>
        {gameWord[6].replace(gameWord[6], " ")}
      </li>
    </ul>
  );
};

export default GuessLetters;
