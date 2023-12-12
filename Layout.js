import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            {/* A publikus tartalom linkje */}
            <Link to="/">Játékok</Link>
          </li>
          <li>
            {/* Az admin oldal linkjetartalom linkje */}
            <Link to="/tictactoe">TicTacToe</Link>
          </li>
          <li>
            {/* Az admin oldal linkjetartalom linkje */}
            <Link to="/lighton">LightOn</Link>
          </li>
        </ul>
      </nav>
      <article>
        {/* Ide kerül majd az útvonalak/linkek által meghatározott tartalom */}
        <Outlet />
      </article>
    </>
  );
};

export default Layout;
