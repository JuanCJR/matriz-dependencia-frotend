import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * @param {changeValue,buttonValues} props 
 * changeValue hook function to capturare value
 * buttonValues[a,b] array with values to change
 */

//Custom radio button for forms
export const CustomRadioButton = (props) => {
  const { changeValue, buttonValues } = props;
  const btn1Value = buttonValues[0];
  const btn2Value = buttonValues[1];

  const [state, setstate] = useState({
    unPressedVariant: "outline-primary",
    pressedVariant: "primary",
    btn1Pressed: false,
    btn2Pressed: false,
  });

  const handlePressed = (pressedBtn, unPressedBtn, value) => {
    setstate((state) => ({
      ...state,
      [pressedBtn]: state[pressedBtn] ? state[pressedBtn] : !state[pressedBtn],
      [unPressedBtn]: state[unPressedBtn]
        ? !state[unPressedBtn]
        : state[unPressedBtn],
    }));

    changeValue(value);
  };

  return (
    <React.Fragment>
      <Button
        onClick={() => handlePressed("btn1Pressed", "btn2Pressed", btn1Value)}
        variant={
          state.btn1Pressed ? state.pressedVariant : state.unPressedVariant
        }
      >
        {btn1Value.charAt(0).toUpperCase()}
        {btn1Value.slice(1)}
      </Button>
      
      <Button
        className="ml-4"
        onClick={() => handlePressed("btn2Pressed", "btn1Pressed", btn2Value)}
        variant={
          state.btn2Pressed ? state.pressedVariant : state.unPressedVariant
        }
      >
        {btn2Value.charAt(0).toUpperCase()}
        {btn2Value.slice(1)}
      </Button>
    </React.Fragment>
  );
};
