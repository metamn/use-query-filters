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
const InputText = props => {
  return <div className="InputText">InputText Naked</div>;
};

InputText.propTypes = propTypes;
InputText.defaultProps = defaultProps;

export {
  InputText,
  propTypes as InputTextPropTypes,
  defaultProps as InputTextDefaultProps
};
