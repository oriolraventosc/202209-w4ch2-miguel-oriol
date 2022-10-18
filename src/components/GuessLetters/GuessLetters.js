import "./GuessLetters.css";

const GuessLetters = ({ gameWord }) => {
  return (
    <ul className="guess-letters">
      <li className={"guess-letter empty"}>
        {gameWord[0].replace(gameWord[0], "")}
      </li>
      <li className={"guess-letter empty"}>
        {gameWord[1].replace(gameWord[1], "")}
      </li>
      <li className={"guess-letter empty"}>
        {gameWord[2].replace(gameWord[2], "")}
      </li>
      <li className={"guess-letter empty"}>
        {gameWord[3].replace(gameWord[3], "")}
      </li>
      <li className={"guess-letter empty"}>
        {gameWord[4].replace(gameWord[4], "")}
      </li>
      <li className={"guess-letter empty"}>
        {gameWord[5].replace(gameWord[5], "")}
      </li>
      <li className={"guess-letter empty"}>
        {gameWord[6].replace(gameWord[6], " ")}
      </li>
    </ul>
  );
};

export default GuessLetters;
