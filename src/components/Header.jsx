import logo from "/game-logo.png";

export const Header = () => {
  return (
    <header>
      <img src={logo} alt="Hand-drawn tic tac toe game board" />
      <h1>Tic-Tac-Toe</h1>
    </header>
  );
};
