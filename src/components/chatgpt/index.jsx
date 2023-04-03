import React, { useState } from 'react';
import PollList from './lesson';

const App = () => {
  const [selectedPollId, setSelectedPollId] = useState(null);

  const handlePollSelect = (id) => {
    setSelectedPollId(id);
  };

  const polls = [
    { id: 1, title: 'Favorite Color', description: 'What is your favorite color?' },
    { id: 2, title: 'Favorite Food', description: 'What is your favorite food?' },
    { id: 3, title: 'Favorite Movie', description: 'What is your favorite movie?' },
  ];

  return (
    <div className="App">
      <h1>Poll List</h1>
      <PollList polls={polls} onSelect={handlePollSelect} />
      {selectedPollId && <p>Selected poll: {selectedPollId}</p>}
    </div>
  );
};

export default App;
