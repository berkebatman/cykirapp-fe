/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import flattenDeep from "utils/flattenDeep";

/*
{
    "key": validation: (value) => { ??? -> "error message"},
}
*/
const upperCaseFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

const useForm = (fields) => {
  const [isValid, setValid] = useState(false);
  const validation = {};
  Object.entries(fields).forEach(([fieldName, initialFieldObject]) => {
    const [value, setValue] = useState(initialFieldObject.initialValue);
    const [isTouched, setTouched] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    validation[fieldName] = {
      validationFunction: initialFieldObject.validation,
      isTouched,
      setTouched,
      errorMessage,
      setErrorMessage,
      value,
      setValue: (...args) => {
        setTouched(true);
        setValue(...args);
      },
    };
  });

  useEffect(() => {
    let isValidCheck = true;
    Object.entries(validation).forEach(([fieldName, validationObject]) => {
      const {
        validationFunction,
        isTouched,
        setErrorMessage,
        value,
      } = validationObject;
      const latestCheck = validationFunction(value);
      if(latestCheck) {
        isValidCheck = false;
      }
      if (latestCheck && isTouched) {
        setErrorMessage(latestCheck);
      } else {
        setErrorMessage(null);
      }
    });
    setValid(isValidCheck);
  }, [
    flattenDeep(
      Object.values(validation).map((e) => {
        return [e.isTouched, e.errorMessage, e.value];
      })
    ),
  ]);
  const result = Object.entries(validation)
    .map(([fieldName, fieldProperties]) => {
      return {
        [`set${upperCaseFirstLetter(fieldName)}`]: fieldProperties.setValue,
        [`${fieldName}`]: fieldProperties.value,
        [`${fieldName}ErrorMessage`]: fieldProperties.errorMessage,
      };
    })
    .reduce((acc, key) => {
      return (acc = { ...acc, ...key });
    }, {});
  return { ...result, isValid };
};

export default useForm;
