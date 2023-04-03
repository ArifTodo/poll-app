import React, {Component} from "react";


class SplitForm extends Component{
      state={
            name : '',
            gmail: '',
            password: ''
      };
      inputHandleChange= event =>{
            this.setState({
                  [event.target.name]:event.target.value
            })
      };

      submitHandle = event =>{ 
            event.preventDefault();
            console.log(this.state);
            event.target.reset();
            this.setState({name:'', gmail: '', password: ''})
            
      };
      render(){
        const {name,gmail,password} = this.state;
            return(
                  <div>
                        <form onSubmit = {this.submitHandle}>
                              <input className = 'form-control m-2' type = 'text' name = 'name' placeholder = 'name' value = {name} onChange ={this.inputHandleChange}/>

                              <input className = 'form-control m-2' type = 'gmail' name = 'gmail' placeholder = 'gmail' value = {gmail} onChange ={this.inputHandleChange}/>

                              <input className = 'form-control m-2' type = 'password' name = 'password' placeholder = 'password' value = {password} onChange ={this.inputHandleChange}/>

                              <button className = 'form-control m-2' type='submit'>submit</button>
                        </form>
                  </div>
            )
      }
}
export default SplitForm;