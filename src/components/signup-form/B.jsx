import React from 'react'
import PropTypes from 'prop-types'
import TextInput from './text.jsx'
const FormA = ({values, agreement, errors,handleChange, handleAgreement, handleSubmit})=>{
      return(
            <form onSubmit={handleSubmit}>
                  <TextInput 
                        name='name'
                        label='name'
                        placeholder='name'
                        value={values.name}
                        error={errors.name}
                        onChange={handleChange}
                  />
                  <TextInput 
                        name='email'
                        label='email'
                        type='email'
                        placeholder='email'
                        value={values.email}
                        error={errors.email}
                        onChange={handleChange}
                  />
                         <TextInput 
                        name='password'
                        label='password'
                        type='password'
                        placeholder='password'
                        value={values.password}
                        error={errors.password}
                        onChange={handleChange}
                  />
                         <TextInput 
                        name='birthDate'
                        label='BirthDate'
                        type='date'
                        placeholder='birthDate'
                        value={values.birthDate}
                        error={errors.birthDate}
                        onChange={handleChange}
                  />
                  <div className='from-group mr-4'>
                        <label className='mr-4'> 
                              <input 
                                    className = 'form-group m-2'
                                    type='radio'
                                    name='gender'
                                    value='Male'
                                    onChange={handleChange}
                              />
                              Male
                        </label>
                        <label className='mr-4'> 
                              <input 
                                    className = 'form-group m-2'
                                    type='radio'
                                    name='gender'
                                    value='Female'
                                    onChange={handleChange}
                              />
                              Female
                        </label><label className='mr-4'> 
                              <input 
                                    className = 'form-group m-2'
                                    type='radio'
                                    name='gender'
                                    value='Other'
                                    onChange={handleChange}
                              />
                              Other
                        </label>
                        {errors.gender && <div className='invalid-feedback'>{errors.gender}</div>}
                  </div>
                  <div>
                  <label className='mr-4'> 
                              <input 
                                    className = 'form-group m-2'
                                    type='checkbox'
                                    name='agreement'
                                    checked={agreement}
                                    onChange={handleAgreement}
                              />
                              I agree
                        </label>
                  </div>
            <button className = 'btn btn-primary' type = 'submit' disabled={!agreement}>Submit</button>

            </form>
      )
};
FormA.propTypes={
      values: PropTypes.object.isRequired,
      agreement: PropTypes.bool.isRequired,
      errors: PropTypes.object.isRequired,
      handleChange: PropTypes.func.isRequired,
      handleAgreement: PropTypes.func.isRequired,
      handleSubmit: PropTypes.func.isRequired
}
export default FormA;