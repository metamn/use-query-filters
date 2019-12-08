import React, { useContext } from "react";

import {
  InputCheckboxPropTypes,
  InputCheckboxDefaultProps,
  inputCheckboxHandleChange
} from "../../../Input";

import { QueryParamsContext } from "../../../Filters";

/**
 * Displays the component
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox
 * @see https://reactjs.org/docs/forms.html#handling-multiple-inputs
 */
const InputCheckbox = props => {
  const { label, queryParam, items } = props;
  const { name, type: queryParamType } = queryParam;

  /**
   * Loads the global query params and the setter function
   */
  const { queryParams, setQueryParams } = useContext(QueryParamsContext);

  /**
   * Loads the value of the query param
   *
   * // TODO this will still give a warning "A component is changing an uncontrolled input of type checkbox to be controlled." - once, then will go away
   */
  const currentValue = queryParams[name] || [];

  return (
    <div className="InputCheckbox">
      <div className="Label">{label}</div>
      <div className="Items">
        {items &&
          items.map((item, index) => {
            const { label: itemLabel, value } = item;

            return (
              <div className="Checkbox" key={index}>
                <input
                  type="checkbox"
                  id={value}
                  name={name}
                  checked={currentValue.find(item => item === value)}
                  onChange={event =>
                    inputCheckboxHandleChange({
                      name: name,
                      event: event,
                      set: setQueryParams,
                      queryParamType: queryParamType,
                      currentValue: currentValue
                    })
                  }
                />
                <label htmlFor={name}>{itemLabel}</label>
              </div>
            );
          })}
      </div>
    </div>
  );
};

InputCheckbox.propTypes = InputCheckboxPropTypes;
InputCheckbox.defaultProps = InputCheckboxDefaultProps;

export { InputCheckbox, InputCheckboxPropTypes, InputCheckboxDefaultProps };
