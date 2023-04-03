import React, {Component} from "react";
import Form from './form-A'
class SplitFormMultiple extends Component{
      state={
            name : '',
            gmail: '',
            password: ''
      };
      inputHandleChange = event =>{
            this.setState({
                  [event.target.name]: event.target.value
            });
      };
      submitHandle = event =>{
            event.preventDefault();
            console.log(this.state);
            event.target.reset();
            this.setState({name: '', gmail: '', password: ''})
      };
      render(){
            return(
                  <div>
                        <Form 
                              values={this.state}
                              submitHandle={this.submitHandle}
                              inputHandleChange={this.inputHandleChange}
                        />
                  </div>
            )
      }
}
export default SplitFormMultiple;

