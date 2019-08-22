import React from "react";
import propTypes from "prop-types";

const Headline = props => {
  const { header, desc } = props;

  if (!header) return null;
  return (
    <div data-test="HeadlineComponent">
      <h1 data-test="header">{header}</h1>
      <p data-test="desc">{desc}</p>
    </div>
  );
};

Headline.propTypes = {
  header: propTypes.string,
  desc: propTypes.string,
  tempArray: propTypes.arrayOf(
    propTypes.shape({
      fName: propTypes.string,
      lName: propTypes.string,
      email: propTypes.string,
      age: propTypes.number,
      onlineStatus: propTypes.bool
    })
  )
};

export default Headline;
