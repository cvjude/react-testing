import React from "react";
import propTypes from "prop-types";

const SharedButton = props => {
  const { buttonText, emitEvent } = props;

  const submitEvent = () => {
    if (emitEvent) emitEvent();
  };

  return (
    <button data-test="buttonComponent" onClick={() => submitEvent()}>
      {buttonText}
    </button>
  );
};

SharedButton.propTypes = {
  buttonText: propTypes.string,
  emitEvent: propTypes.func
};

export default SharedButton;
