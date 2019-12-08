import React from "react";
import PropTypes from "prop-types";

import { SupportedFilters } from "../Filters";
import { QueryParamPropTypes, QueryParamDefaultProps } from "../QueryParam";

/**
 * Loads the `filter` from `SupportedFilters`
 */
const loadFilter = () => {
  return SupportedFilters && SupportedFilters.map
    ? SupportedFilters.map(item => item.filter)
    : ["undefined"];
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
    PropTypes.any
  );
};

/**
 * Defines the text input prop types
 *
 * Common prop types can't be shared across various input elements. They will result in strange test errors.
 * Therefore all of them are added manually for all inputs
 */
const InputTextPropTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  queryParam: PropTypes.shape(QueryParamPropTypes),
  changeHandler: PropTypes.func,
  value: PropTypes.string
};

/**
 * Defines the default props for the text input
 */
const InputTextDefaultProps = {
  label: "Text",
  type: "text",
  name: "text",
  queryParam: QueryParamDefaultProps,
  handleChange: () => {
    console.log("handleChange");
  },
  value: ""
};

/**
 * Defines the checkbox input prop types
 */
const InputCheckboxPropTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  queryParam: PropTypes.shape(QueryParamPropTypes),
  changeHandler: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: loadValue({ inputType: "checkbox" })
    })
  )
};

/**
 * Defines the default props for the checkbox input
 */
const InputCheckboxDefaultProps = {
  label: "Checkbox",
  type: "checkbox",
  name: "checkbox",
  queryParam: QueryParamDefaultProps,
  handleChange: () => {
    console.log("handleChange");
  },
  items: [
    {
      label: "Checkbox 1",
      value: "checkbox-1"
    }
  ]
};

/**
 * Defines the range multi handle input prop types
 */
const InputRangeMultiHandlePropTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  queryParam: PropTypes.shape(QueryParamPropTypes),
  changeHandler: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  value: loadValue({ inputType: "range-multi-handle" })
};

/**
 * Defines the default props for the range multi handle input
 */
const InputRangeMultiHandleDefaultProps = {
  label: "Range Multi Handle",
  type: "range-multi-handle",
  name: "range-multi-handle",
  queryParam: QueryParamDefaultProps,
  handleChange: () => {
    console.log("handleChange");
  },
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
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  queryParam: PropTypes.shape(QueryParamPropTypes),
  changeHandler: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: loadValue({ inputType: "select" })
    })
  )
};

/**
 * Defines the default props for the select input
 */
const InputSelectDefaultProps = {
  label: "Select",
  type: "select",
  name: "select",
  queryParam: QueryParamDefaultProps,
  handleChange: () => {
    console.log("handleChange");
  },
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
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  queryParam: PropTypes.shape(QueryParamPropTypes),
  changeHandler: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: loadValue({ inputType: "radio" })
    })
  )
};

/**
 * Defines the default props for the radio input
 */
const InputRadioDefaultProps = {
  label: "Radio",
  type: "radio",
  name: "radio",
  queryParam: QueryParamDefaultProps,
  handleChange: () => {
    console.log("handleChange");
  },
  items: [
    {
      label: "Radio 1",
      value: "radio-1"
    }
  ]
};

/**
 * Defines the prop types
 *
 * - We can't merge proptypes
 * - Therefore we will collect them by hand from all props above
 */
const propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf([
    "text",
    "checkbox",
    "select",
    "radio",
    "range-multi-handle"
  ]), // TODO use the loadFilter function ...
  name: PropTypes.string,
  queryParam: PropTypes.shape(QueryParamPropTypes),
  changeHandler: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: loadValue({ inputType: "radio" })
    })
  ),
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.any
};

/**
 * Defines the default props
 */
const defaultProps = {
  label: "Input",
  type: "text",
  name: "input",
  queryParam: QueryParamDefaultProps,
  handleChange: () => {
    console.log("handleChange");
  },
  items: [
    {
      label: "Radio 1",
      value: "radio-1"
    }
  ],
  min: 0,
  max: 0
};

/**
 * Handles events associated to a checkbox input
 */
const inputCheckboxHandleChange = props => {
  const { name, event, set, queryParamType, currentValue } = props;
  const { target } = event;
  const { checked, id } = target;

  /**
   * Defines the type of the new query param value
   *
   * - on DelimitedNumericArrayParam it must be integer, otherwise string
   */
  const idTyped =
    queryParamType === "DelimitedNumericArrayParam" ? parseInt(id) : id;

  /**
   * Sets the new query param value
   */
  let newQueryParam = {};
  newQueryParam[name] = checked
    ? [...currentValue, idTyped]
    : currentValue.filter(item => item !== idTyped);

  set(newQueryParam);
};

/**
 * Handles events associated to a common set of inputs (text, radio, select ...)
 */
const commonHandleChange = props => {
  const { name, event, set } = props;
  const { target } = event;
  const { value } = target;

  let newQueryParam = {};
  newQueryParam[name] = value;

  set(newQueryParam);
};

/**
 * Handles events associated to a text input
 */
const inputSelectHandleChange = props => {
  return commonHandleChange(props);
};

/**
 * Handles events associated to a radio input
 */
const inputRadioHandleChange = props => {
  return commonHandleChange(props);
};

/**
 * Handles events associated to a text input
 */
const inputTextHandleChange = props => {
  return commonHandleChange(props);
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
  InputRangeMultiHandleDefaultProps,
  inputTextHandleChange,
  inputRadioHandleChange,
  inputSelectHandleChange,
  inputCheckboxHandleChange
};
