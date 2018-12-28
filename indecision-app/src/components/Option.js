import React from 'react';
const Option = props => (
  <>
    {
      <div>
        <p>Option: {props.optionText}</p>
        <button
          className="button button--link"
          onClick={() => {
            props.handleDeleteOption(props.optionText);
          }}
        >
          Delete
        </button>
      </div>
    }
  </>
);

export default Option;
