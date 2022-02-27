import { useState } from 'react';

const numberValue = (value) => Math.abs(parseInt(value.trim()));

const validRange = (value) => {
  const valueParsed = numberValue(value);
  if (isNaN(valueParsed)) {
    return false;
  } else {
    if (valueParsed > 0 && valueParsed < 21) {
      return true;
    } else {
      return false;
    }
  }
};

const useInput = () => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validRange(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandlerNumbers = (event) => {
    const valueParsed = numberValue(event.target.value);
    if (isNaN(valueParsed)) {
      setEnteredValue('');
    } else {
      setEnteredValue(event.target.value);
    }
  };

  const inputFocusHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandlerNumbers,
    inputFocusHandler,
    reset,
  };
};

export default useInput;
