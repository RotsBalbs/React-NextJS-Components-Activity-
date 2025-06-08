import React from 'react';

const WelcomeCard = ({ name }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <h2>Welcome, {name}!</h2>
      <p>We're glad you're here. Enjoy exploring React and Next.js!</p>
    </div>
  );
};

export default WelcomeCard;
