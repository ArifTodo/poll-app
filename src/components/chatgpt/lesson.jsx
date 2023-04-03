import React from 'react';
import PollListItem from './lesson2';

const PollList = ({ polls, onSelect }) => {
  return (
    <div className="poll-list">
      {polls.map(poll => (
        <PollListItem 
            key={poll.id}
            poll={poll}
            onSelect={onSelect} />
      ))}
    </div>
  );
};

export default PollList;
