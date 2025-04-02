import React from 'react';
import TestCard from '../components/TestCard';

const TestSelection = () => {
  const subjects = [
    { title: 'OSP', path: '/osp' },
    { title: 'ZSV', path: '/zsv/test' },
    { title: 'Angličtina', path: '/english/test' },
    { title: 'Matematika', path: '/math/test' },
    { title: 'Přírodní vědy', path: '/science/test' },
  ];

  return (
    <div className="container">
      <h2>Vyber si předmět</h2>
      <div className="test-grid">
        {subjects.map((subject, index) => (
          <TestCard
            key={index}
            title={subject.title}
            description={`Procvičování testů z předmětu ${subject.title}.`}
            linkPath={subject.path}
          />
        ))}
      </div>
    </div>
  );
};

export default TestSelection;
