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
const InputCheckbox = props => {
  return <div className="InputCheckbox">InputCheckbox Naked</div>;
};

InputCheckbox.propTypes = propTypes;
InputCheckbox.defaultProps = defaultProps;

export {
  InputCheckbox,
  propTypes as InputCheckboxPropTypes,
  defaultProps as InputCheckboxDefaultProps
};
