import { useState } from 'react';
import { validate } from '../utils/formValidator';
  
const  useFormValidator = (initialValues, validationSchema) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
  
    const validateField = async (name, value) => {
      const rules = validationSchema[name];
      if (!rules) return;
  
      const fieldErrors = [];
      for (const rule of rules) {
        const error = await validate(name, rule, value);
        if (error) {
          fieldErrors.push(error);
          if (rule.bail) {
            // stop running validation rules if bail is true
            break;
          }
        }
      }
  
      setErrors((errors) => ({ ...errors, [name]: fieldErrors }));
    };
  
    const validateFields = async (
      fields
    ) => {
      const errs = {};
      for (const name in validationSchema) {
        const rules = validationSchema[name];
        const value = values[name];
        for (const rule of rules) {
          const error = await validate(name, rule, value);
          if (error) {
            errs[name] = errs[name] || [];
            errs[name].push(error);
            if (rule.bail) {
              // stop running validation rules if bail is true
              break;
            }
          }
        }
      }
      setErrors(errs);
      return errs;
    };
  
  
    const valuesProxy = new Proxy(values, {
      set(target, prop, receiver) {
        validateField(prop, receiver);
        Reflect.set(target, prop, receiver);
        setValues(prev => ({ ...prev, [prop]: receiver }));
        return true;
      },
    });
  
    return {
      values: valuesProxy,
      errors,
      validateField,
      validateFields,
    };
  }

export default useFormValidator;