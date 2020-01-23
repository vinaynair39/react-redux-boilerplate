import React, { useState } from 'react';
import { unsetErrors, setErrors} from '../actions/auth'
import { useDispatch, useSelector } from 'react-redux';

export const useRegisterForm = (callback, initialState = {}) => {
    const [values, setValues] = useState(initialState);
    const error = useSelector(state => state.auth.error);
    const [formError, setFormError] = useState({ name: "", email: "", phone: "", password: "", confirmPassword: "" })
    const dispatch = useDispatch();
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const onChange = (event) => {
        dispatch(unsetErrors());
        const { name, value } = event.target;
        let formErrors = { ...formError };
        switch (name) {
            case "name":
                formErrors.name = value.length < 6 ? "Minimum 6 characters required for Name" : '';
                break;
            case "email":
                formErrors.email = re.test(String(value).toLowerCase()) ? "" : 'Enter a valid Email';
                break;
            case "phone":
                formErrors.phone = value.length <= 1
                    ? "Phone Number Required"
                    : value.length > 10
                        ? "Maximum 10 characters allowed for a phone number"
                        : "";
                break;
            case "password":
                formErrors.password = value.length < 6 ? "Minimum 6 characters required for Password" : '';
                break;
            default:
                break;
        }
        setFormError(formErrors)
        setValues({ ...values, [name]: value });
        console.log(values)
    };

    const formValid = (formError, values) => {
        let valid = true;
        // validate form errors being empty
        Object.values(formError).forEach(val => {
            val.length > 0 && (valid = false);
        });
        // validate the form was filled out
        Object.values(values).forEach(val => {
            val === null && (valid = false);
        });
        return valid;
    };

    const onSubmit = async (event) => {
        dispatch(unsetErrors());
        event.preventDefault();
        console.log(values)
        if (formValid(formError, values) && values.password === values.confirmPassword) {
            const data = dispatch(callback(values));
        }
        else {
            dispatch(setErrors("passwords doesn't match"));
        }
    }

    return {
        onChange,
        onSubmit,
        values,
        error,
        formError,
    };
};


export const useForm = (callback, initialState = {}) => {
    const [values, setValues] = useState(initialState);
    const error = useSelector(state => state.auth.error)
    const dispatch = useDispatch();
  
    const onChange = (event) => {
      setValues({ ...values, [event.target.name]: event.target.value });
    };
    const onSubmit = (event) => {
      dispatch(unsetErrors());
      event.preventDefault();
        dispatch(callback(values)).then((data) => {
          console.log(data)
        });
  
    };
  
    return {
      onChange,
      onSubmit,
      values,
      error,
    };
  };