import React from 'react';

const PollListItem = ({ poll, onSelect }) => {
  return (
    <div className="poll-list-item" onClick={() => onSelect(poll.id)}>
      <h3>{poll.title}</h3>
      <p>{poll.description}</p>
    </div>
  );
};

export default PollListItem;
