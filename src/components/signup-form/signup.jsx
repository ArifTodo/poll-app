import React from "react";
import Form from './form1'
import PropTypes from 'prop-types'
const initValues = {
            name: '',
            email: '',
            password: '',
            birthDate: '',
            gender: ''
};
class SignUp extends React.Component{
      state ={
            values: initValues,
            agreement: false,
            errors: {}
      };

      handleChange = event =>{
            this.setState({
                  values:{
                        ...this.state.values,
                        [event.target.name]: event.target.value
                  }
            })
      };
      handleAgreement = event =>{
            this.setState({
                  agreement: event.target.checked
            })
      };
      handleSubmit = event =>{
            event.preventDefault();
            const  {isValid, errors}= this.valiDate()
            if(isValid){
                  this.props.createUser(this.state.values)
                  event.target.reset()
                  this.setState({values: initValues, agreement: false, errors: {}})
            }else{
                  this.setState({errors})
            }
      };
      valiDate = () => {
            const errors = {}
            const  {values: {name, email, password, birthDate, gender}} = this.state
            if(!name){
                  errors.name = 'Please Provide a name'
            }
            if(!email){
                  errors.email = 'Please Provide a email'
            }
            if(!password){
                  errors.password = 'Please Provide a password'
            }
            if(!birthDate){
                  errors.birthDate = 'Please Provide a bithDate'
            }
            if(!gender){
                  errors.gender = 'Please Provide a gender'
            }
            return{
                  errors,
                  isValid: Object.keys(errors).length === 0
            }
      }

      render(){
            return(
                  <div>
                        <h2>SignUp</h2>
                        <Form 
                              values = {this.state.values}
                              agreement = {this.state.agreement}
                              errors={this.state.errors}
                              handleChange = {this.handleChange}
                              handleAgreement={this.handleAgreement}
                              handleSubmit={this.handleSubmit}
                        />
                  </div>
            )
      }
};
SignUp.propTypes = {
      createUser: PropTypes.func.isRequired
}
export default SignUp;