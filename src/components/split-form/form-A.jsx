import React from 'react'
import PropTypes from 'prop-types'
import TextInput from './input-text';
const Form = props => (
      <form onSubmit = {props.submitHandle}>
                             <TextInput
                                    name = 'name'
                                    label = 'Enter name'
                                    placeholder = 'Enter name'
                                    value = {props.values.name}
                                    onChange = {props.inputHandleChange}
                             />
                              <TextInput 
                                    name = 'gmail'
                                    type = 'gmail'
                                    label = 'Enter gmail'
                                    placeholder = 'gmail'
                                    value = {props.values.gmail}
                                    onChange = {props.inputHandleChange}
                             />
                              <TextInput 
                                    name = 'password'
                                    type = 'password'
                                    label = 'Enter password'
                                    placeholder = 'Password'
                                    value = {props.values.password}
                                    onChange = {props.inputHandleChange}
                             />

                              <button className = 'form-control m-2' type='submit'>submit</button>
      </form>
);

Form.propTypes = {
      values: PropTypes.object.isRequired,
      inputHandleChange: PropTypes.func.isRequired,
      submitHandle: PropTypes.func.isRequired
};

export default Form;