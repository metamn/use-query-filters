import React from "react";
import PropTypes from "prop-types";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Displays the component
 */
const Test = props => {
  return <div className="Test">Test</div>;
};

Test.propTypes = propTypes;
Test.defaultProps = defaultProps;

export default Test;
export { propTypes as TestPropTypes, defaultProps as TestDefaultProps };
