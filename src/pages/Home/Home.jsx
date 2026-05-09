import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';

const Home = () =>{
  return (
    <div>
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li>
            <Link to="/About">Sobre</Link>
          </li>
          <li>
            <Link to="/Profile">Usuario</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;