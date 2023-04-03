import React from "react";
import PropTypes from 'prop-types'
import InputT from "./inputT";

const Form = ({values, agreement, errors, handleChange, handleAgreement, handleSubmit}) =>{
      return(
            <form onSubmit ={handleSubmit}>
                  <InputT 
                        name = 'name'
                        label = 'name'
                        placeholder='sraboni'
                        error={errors.name}
                        value = {values.name}
                        onChange={handleChange}
                  />
                  <InputT 
                        name = 'email'
                        type='email'
                        label = 'email'
                        placeholder='mohammadarif@.com'
                        error={errors.name}
                        value = {values.email}
                        onChange={handleChange}
                  />
                  <InputT
                  name = 'password'
                  type='password'
                  label = 'password'
                  placeholder='password'
                  error={errors.password}
                  value = {values.password}
                  onChange={handleChange}
            />
            <InputT
                  name = 'birthDate'
                  type='date'
                  label = 'BirthDate'
                  error={errors.birthDate}
                  value = {values.birthDate}
                  onChange={handleChange}
            />
          <div className = 'form-group m-4'>
                  <label>
                        <input 
                              className = 'form-group m-2'
                              type ='radio'
                              name = 'gender'
                              value = 'Male'
                              onChange ={handleChange}
                        />
                        Male
                  </label>
                  <label>
                        <input
                              className = 'form-group m-2'
                              type ='radio'
                              name = 'gender'
                              value = 'Female'
                              onChange ={handleChange}
                        />
                        Female
                  </label>
                  <label>
                        <input 
                        className = 'form-group m-2'
                              type ='radio'
                              name = 'gender'
                              value = 'Other'
                              onChange ={handleChange}
                        />
                        Other
                  </label>
                  {errors.gender && <div className='invalid-feedback'>{errors.gender}</div>}
          </div>
            <div className='form-group m-4'>
                  <label>
                       <input 
                              className= 'form-group m-1'
                              type = 'checkbox'
                              name= 'agreement'
                              checked = {agreement}
                              onChange={handleAgreement}
                       />
                       I agree
                  </label>
            </div>
            <button className = 'btn btn-primary' type = 'submit' disabled={!agreement}>Submit</button>
            </form>
      )
};
Form.propTypes = {
      values: PropTypes.object.isRequired,
      agreement: PropTypes.bool.isRequired,
      errors: PropTypes.object.isRequired,
      handleChange: PropTypes.func.isRequired,
      handleAgreement: PropTypes.func.isRequired,
      handleSubmit: PropTypes.func.isRequired
};
export default Form;