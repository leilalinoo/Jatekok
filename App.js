import './App.css';
import logo from './logo.svg';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jatekok from './pages/Jatekok';
import TicTacToeApp from './pages/TicTacToeApp';
import LightOnApp from './pages/LightOnApp';
import Layout from './Layout';
import NoPage from './pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Jatekok />} />
          <Route path="tictactoe" element={<TicTacToeApp />} />
          <Route path="lighton" element={<LightOnApp />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
