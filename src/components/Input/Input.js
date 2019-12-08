import React from "react";
import PropTypes from "prop-types";

import { SupportedFilters } from "../Filters";
import { QueryParamPropTypes, QueryParamDefaultProps } from "../QueryParam";

/**
 * Defines the common props for all inputs
 */
const CommonInputPropTypes = () => {
  const t =
    SupportedFilters && SupportedFilters.map
      ? SupportedFilters.map(item => item.filter)
      : ["undefined"];

  return {
    label: PropTypes.string,
    type: PropTypes.oneOf(t),
    name: PropTypes.string,
    queryParam: PropTypes.shape(QueryParamPropTypes),
    changeHandler: PropTypes.func
  };
};

/**
 * Defines the default values for the common props
 */
const CommonInputDefaultProps = {
  label: "Filter",
  type: "text",
  name: "query",
  queryParam: QueryParamDefaultProps,
  handleChange: () => {
    console.log("handleChange");
  }
};

/**
 * Loads the `value` from `SupportedFilters`
 */
const loadValue = props => {
  const { inputType } = props;

  return (
    (SupportedFilters &&
      SupportedFilters.filter &&
      SupportedFilters.filter(item => item.filter === inputType)
        .map(item => item.paramValues)
        .shift()) ||
    {}
  );
};

/**
 * Defines the common props for the inputs with items
 */
const InputWithItemsPropTypes = props => {
  return {
    label: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: loadValue(props)
      })
    )
  };
};

/**
 * Defines the range multi handle input prop types
 */
const InputRangeMultiHandlePropTypes = {
  ...CommonInputPropTypes,
  min: PropTypes.number,
  max: PropTypes.number,
  value: loadValue({ inputType: "range-multi-handle" })
};

/**
 * Defines the default props for the range multi handle input
 */
const InputRangeMultiHandleDefaultProps = {
  ...CommonInputDefaultProps,
  min: 0,
  max: 5,
  value: {
    min: 1,
    max: 4
  }
};

/**
 * Defines the select input prop types
 */
const InputSelectPropTypes = {
  ...CommonInputPropTypes,
  ...InputWithItemsPropTypes({ inputType: "select" })
};

/**
 * Defines the default props for the select input
 */
const InputSelectDefaultProps = {
  ...CommonInputDefaultProps,
  label: "Select",
  items: [
    {
      label: "Select 1",
      value: "select-1"
    },
    {
      label: "Select 2",
      value: "select-2"
    }
  ]
};

/**
 * Defines the radio input prop types
 */
const InputRadioPropTypes = {
  ...CommonInputPropTypes,
  ...InputWithItemsPropTypes({ inputType: "radio" })
};

/**
 * Defines the default props for the radio input
 */
const InputRadioDefaultProps = {
  ...CommonInputDefaultProps,
  label: "Radio",
  items: [
    {
      label: "Radio 1",
      value: "radio-1"
    }
  ]
};

/**
 * Defines the checkbox input prop types
 */
const InputCheckboxPropTypes = {
  ...CommonInputPropTypes,
  ...InputWithItemsPropTypes({ inputType: "checkbox" })
};

/**
 * Defines the default props for the checkbox input
 */
const InputCheckboxDefaultProps = {
  ...CommonInputDefaultProps,
  label: "Checkbox",
  items: [
    {
      label: "Checkbox 1",
      value: "checkbox-1"
    }
  ]
};

/**
 * Defines the text input prop types
 */
const InputTextPropTypes = {
  ...CommonInputPropTypes,
  value: PropTypes.string
};

/**
 * Defines the default props for the text input
 */
const InputTextDefaultProps = {
  ...CommonInputDefaultProps,
  value: ""
};

/**
 * Defines the prop types
 * 
 * - We can't merge them all like:
 * 
 * {
  ...InputTextPropTypes,
  ...InputCheckboxPropTypes,
  ...InputSelectPropTypes,
  ...InputRadioPropTypes,
  ...InputRangeMultiHandlePropTypes
}
=> this will result in strange warnings and errors
 *
 */
const propTypes = {
  ...CommonInputPropTypes
};

/**
 * Defines the default props
 */
const defaultProps = {
  ...CommonInputDefaultProps
};

/**
 * Displays the component
 */
const Input = props => {
  return null;
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
export {
  propTypes as InputPropTypes,
  defaultProps as InputDefaultProps,
  InputTextPropTypes,
  InputTextDefaultProps,
  InputCheckboxPropTypes,
  InputCheckboxDefaultProps,
  InputRadioPropTypes,
  InputRadioDefaultProps,
  InputSelectPropTypes,
  InputSelectDefaultProps,
  InputRangeMultiHandlePropTypes,
  InputRangeMultiHandleDefaultProps
};
