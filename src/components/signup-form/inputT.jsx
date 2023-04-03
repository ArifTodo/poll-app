import React from "react";
import PropTypes from 'prop-types'

const InputT = props =>(
      <div className = 'form-group'>
            <label htmlFor={props.name}>{props.label}</label>
            <input 
                  className = {props.error ? 'form-control is-invalid' : 'form-control'}
                  type={props.type}
                  name ={props.name}
                  id ={props.id}
                  value={props.value}            
                  placeholder={props.placeholder}
                  onChange={props.onChange}
            />
            {props.error && <div className='invalid-feedback'>{props.error}</div>}
      </div>
);
InputT.propTypes ={
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
      errors: PropTypes.string
};
InputT.defaultProps={
      type:'text',
      label:'',
      placeholder:''
}
export default InputT;