import React, {Component} from "react";

class Input extends Component{
      state ={
            name:'',
            country:'',
            bio:'',
            birthDay:'',
            gender : '',
            agree : false
      }

      checkedHandle = event =>{
            this.setState({
                  agree : event.target.checked
            })
      }
      clickButtonEvent = event =>{
           console.log(event.target)
      }
      inputHandleChange = event =>{
            this.setState({
                  [event.target.name]:event.target.value
            });
      }
      inputFocus = event =>{
            console.log('i am focus')
      }
      inputBlur = event =>{
            if(!this.state.name){
                  alert('i am Blur')
            }
            console.log('Blur')
      }
      render(){
            const {name,country,bio,birthDay,agree} = this.state
            return(
                  <div>
                        <input className = 'form-control m-2 m-2' type = 'text' name ='name' value = {name} 
                        placeholder = 'Enter some word' 
                        onChange = {this.inputHandleChange}
                        onFocus = {this.inputFocus}
                        onBlur = {this.inputBlur}
                         />

                        <select className = 'form-control m-2 m-2' name = 'country' value = {country} onChange = {this.inputHandleChange} >
                              <option>select country</option>
                              <option value = 'bangladesh'>Bangladesh</option>
                              <option value = 'india'>India</option>
                              <option value = 'pakistan'>Pakistan</option>
                              <option value = 'afganistan'>Afgaistan</option>
                              <option value = 'chaina'>Chaina</option>
                        </select>

                        <textarea className = 'form-control m-2' type = 'text' name = 'bio' value = {bio} onChange = {this.inputHandleChange} placeholder = 'Enter your bio'>

                        </textarea>

                        <input className = 'form-control m-2' type = 'date' name = 'birthDay' value = {birthDay} onChange = {this.inputHandleChange} />
                        <div>
                              <input type = 'radio' name = 'gender' value = 'male' onChange = {this.inputHandleChange}/>Male
                              <input  type = 'radio' name = 'gender' value = 'female' onChange = {this.inputHandleChange}/>Female 
                              <input  type = 'radio' name = 'gender' value = 'other' onChange = {this.inputHandleChange}/>other
                        </div>
                        <div>
                              <input  type = 'checkbox' name = 'agree' checked = {agree} onChange = {this.checkedHandle}/> I agree to all turms & conditions
                        </div>
                        <button className = 'form-control m-2' onClick = {() => console.log(this.state)} >
                              show data
                        </button>
                      
                  </div>

                  
            )
      }
}
export default Input;