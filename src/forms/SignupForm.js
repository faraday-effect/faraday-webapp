// @flow

import * as React from 'react';

import {Field, reduxForm} from 'redux-form';
import {SubmitButton, InputField} from "./components";

import Validator from 'validatorjs';

const SignupForm = (props: any) => {
    return (
        <form>
            <Field name="email" type="text" component={InputField} label="Email Address" placeholder="who@example.com"/>
            <Field name="firstName" type="text" component={InputField} label="First Name" placeholder="Your given name"/>
            <Field name="lastName" type="text" component={InputField} label="Last Name" placeholder="Your surname"/>
            <SubmitButton disabled={props.invalid} onClick={props.handleSubmit}/>
        </form>
    );
};

function signupValidator(data) {
    const rules = {
        email: 'required|email',
        firstName: 'required',
        lastName: 'required'
    };

    const validator = new Validator(data, rules);
    validator.passes();
    return validator.errors.all();
}

export default reduxForm({
    form: 'signup',
    validate: signupValidator
})(SignupForm);
