import React from 'react';

const PortfolioItemPage = props => (
  <div>
    <h1>Portfolio Item {props.match.params.id}</h1>
    <p>Portfolio Item</p>
  </div>
);

export default PortfolioItemPage;
