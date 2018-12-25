import React from 'react';
const Header = props => {
  return (
    <>
      <h1>{props.title}</h1>
      {props.subTitle && <p>{props.subTitle}</p>}
    </>
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

export default Header;
