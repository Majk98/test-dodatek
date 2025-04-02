import React from 'react';
import { Link } from 'react-router-dom';

const TestCard = ({ title, description, linkPath }) => {
  return (
    <div className="test-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={linkPath} className="test-link">Spustit test</Link>
    </div>
  );
};

export default TestCard;
