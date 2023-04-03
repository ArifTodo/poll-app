import React from 'react'
import PropTypes from 'prop-types'

const TextInput = props =>(
      <div className='from-group'>
            <label htmlFor={props.name}>{props.label}</label>
            <input 
                  className={props.error ? 'form-control  is-invalid' : 'from-control' }
                  type={props.type}
                  name={props.name}
                  id={props.id}
                  value={props.value}
                  placeholder={props.placeholder}
                  onChange={props.onChange}
            />
            {props.error && <div className='invalid-feedback'>{props.error}</div>}
      </div>
);
TextInput.propTypes ={
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      errors: PropTypes.string,
      value: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired
};
TextInput.defaultProps = {
      type: 'text',
      label: '',
      placeholder: ''
};
export default TextInput;