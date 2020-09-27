import React, { useEffect, useState } from 'react';

import './styles/custom.css';
import Header from './components/Header';
import Joke from './components/Joke';
import Axios from 'axios';

export default function App() {

  const [currentJoke, setCurrentJoke] = useState('');
  const config = {
    headers: {
      Accept: "application/json",
    }
  };

  const getJoke = async () => {
    const { data } = await Axios.get('https://icanhazdadjoke.com/', config);
    setCurrentJoke(data.joke);
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div className="">
      <Header />
      <Joke
        currentJoke={currentJoke}
        getNewJoke={getJoke}
      />
    </div>
  );
}