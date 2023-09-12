import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Yes",
      handler: props.actionProvider.handleYes,
      id: 1,
    },
    {
      text: "No",
      handler: props.actionProvider.handleNo,
      id: 1,
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
