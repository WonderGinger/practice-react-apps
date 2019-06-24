import React from 'react';
import './App.css';
import SocialCard from './components/SocialCard';
import data from './data.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {data.socialCards.map((socialCard, socialCardIndex) => (
          <SocialCard
            key={socialCardIndex}
            data={socialCard}
            index={socialCardIndex}
          />
        ))}
      </header>
    </div>
  );
}

export default App;
