import "./Result.css";

const Result = ({ isIlive }) => {
  return (
    <section className="game-result">{isIlive ? "You're dead!" : ""}</section>
  );
};

export default Result;
