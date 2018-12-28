import React from 'react';
import Option from './Option';
const Options = props => (
  <>
    <button className="button button--link" onClick={props.handleDeleteOptions}>
      Remove All
    </button>
    {props.options.length === 0 && <p>Please add an option to get started!</p>}
    {props.options.map(e => (
      <Option
        key={e}
        optionText={e}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </>
);
export default Options;
