import React, { useState, useEffect, useContext } from "react";

import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

import {
  InputRangeMultiHandlePropTypes,
  InputRangeMultiHandleDefaultProps
} from "../../../Input";

import { QueryParamsContext } from "../../../Filters";

/**
 * Displays the component
 *
 * - There is no such a standard HTML element so a plugin is used
 *
 * @see https://github.com/davidchin/react-input-range
 */
const InputRangeMultiHandle = props => {
  const { label, queryParam: qp, min, max, value } = props;
  const { name } = qp;

  /**
   * Loads the global query params and the setter function
   */
  const { queryParams, setQueryParams } = useContext(QueryParamsContext);

  /**
   * Loads the value of the query param
   */
  const queryParam = queryParams[name] || [];

  /**
   * Sets up the holder for the new query param value
   */
  let newQueryParam = {};

  /**
   * Sets up the min/max initial values
   */
  let initialValue = value;

  if (queryParam.length !== 0) {
    initialValue = queryParam.reduce((accumulator, currentValue, index) => {
      accumulator[Object.keys(value)[index]] = currentValue;
      return accumulator;
    }, {});
  }

  /**
   * Saves the current slider values into a state to update them instantly on user interaction
   */
  const [currentValue, setCurrentValue] = useState(initialValue);

  /**
   * Sets the new query param value
   */
  useEffect(() => {
    newQueryParam[name] = Object.values(currentValue);
  }, [currentValue, name, newQueryParam]);

  return (
    <div className="InputRangeMultiHandle">
      <div className="Label">{label}</div>
      <InputRange
        className="InputRange"
        maxValue={max}
        minValue={min}
        value={currentValue}
        onChange={currentValue => setCurrentValue(currentValue)}
        onChangeComplete={() => setQueryParams(newQueryParam)}
      />
    </div>
  );
};

InputRangeMultiHandle.propTypes = InputRangeMultiHandlePropTypes;
InputRangeMultiHandle.defaultProps = InputRangeMultiHandleDefaultProps;

export { InputRangeMultiHandle };
