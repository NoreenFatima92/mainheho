// src/components/multiplecards/Multicards.jsx

import React from 'react';
import Cards from '../cards/Cards';

const Multicards = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <Cards />
        </div>
        <div className="col-md-4">
          <Cards />
        </div>
        <div className="col-md-4">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Multicards;
