import React, { useContext } from "react";

import {
  InputRadioPropTypes,
  InputRadioDefaultProps,
  inputRadioHandleChange
} from "../../../Input";

import { QueryParamsContext } from "../../../Filters";

/**
 * Displays the component
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
 */
const InputRadio = props => {
  const { label, queryParam, items } = props;
  const { name } = queryParam;

  /**
   * Loads the global query params and the setter function
   */
  const { queryParams, setQueryParams } = useContext(QueryParamsContext);

  /**
   * Loads the value of the query param
   */
  const currentValue = queryParams[name] || "";

  return (
    <div className="InputRadio">
      <div className="Label">{label}</div>

      <div className="Items">
        {items &&
          items.map &&
          items.map((item, index) => {
            const { label, value } = item;

            return (
              <div className="Radio" key={index}>
                <input
                  type="radio"
                  value={value}
                  name={name}
                  checked={currentValue === value}
                  onChange={event =>
                    inputRadioHandleChange({
                      name: name,
                      event: event,
                      set: setQueryParams
                    })
                  }
                />
                <label htmlFor={name}>{label}</label>
              </div>
            );
          })}
      </div>
    </div>
  );
};

InputRadio.propTypes = InputRadioPropTypes;
InputRadio.defaultProps = InputRadioDefaultProps;

export { InputRadio, InputRadioDefaultProps, InputRadioPropTypes };
