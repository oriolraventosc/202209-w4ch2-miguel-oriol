import GuessLetters from "./components/GuessLetters/GuessLetters";

import Hangman from "./components/Hangman/Hangman";
import Letters from "./components/Letters/Letters";
import Result from "./components/Result/Result";
import UsedLetters from "./components/UsedLetters/UsedLetters";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="main-container">
          <UsedLetters />
          <Hangman />
        </div>
        <GuessLetters gameWord={"c_n_a_t"} />
        <Result isIlive={true} />
        <Letters />
      </div>
    </>
  );
};

export default App;
