import React from "react";


import classes from  './button.module.css'
class Module extends React.Component{
      state = {
            name: '',
            country: '',
            bio: '',
            birthDay: '',
            gender: '',
            agree : false,
            skills: [],
            fullname: '',
            email: '',
            password: ''
      };
      formHandleChange = event =>{
            this.setState({
                  [event.target.fullname] : event.target.value
            })
      }
      handleSubmit = event =>{
            event.preventDefault();
            console.log(this.state);
            event.target.reset();
            this.setState({fullname: '', email: '', password: ''})
      }
  
    skillHandelarCahnge = event =>{
          if(event.target.checked){
                this.setState({
                      skills: [...this.state.skills,event.target.value]
                })
          }else{
                const skills = this.state.skills.filter(skill => skill !== event.target.value)
                this.setState({skills})
          }
    }
      checkedHandle = event =>{
            this.setState({
                  agree : event.target.checked
            })
      }
      InputHandle = event => {
            this.setState({
                  [event.target.name]:event.target.value
            })
      }

      ClickHandleBtn = event =>{
            console.log(event.target)
      };
      handleChange = event =>{
            this.setState({name: event.target.value})
      };

      handleFocus = event =>{
            console.log('i am focus')
      };
   
      handleBlur = event =>{
            if(!this.state.name){
                  alert('please enter your name')
            }
            console.log('blur')
      };
      render(){
            const {name,country,bio,birthDay, agree,skills, fullname,email,password} = this.state

            return(
                  <div className = {classes.wrapper}>
                        <h1 className = {classes.heading}>welcome to React</h1>
                        <button onClick = {this.ClickHandleBtn}>Click me</button>
                        <input 
                        className = {classes.textField}
                         type = 'text' 
                        placeholder = 'Enter your name'
                        value = {this.state.name}
                         onChange = {this.handleChange} 
                         onFocus = {this.handleFocus}
                         onBlur = {this.handleBlur}
                         />
                         <br />
                         <br />
                         {this.state.name && <h3>welcome, {this.state.name}</h3>}

                         <input  className = 'form-control m-2' type = 'text' name = 'name' value = {name}
                          placeholder = 'Enter some text' onChange = {this.InputHandle}
                          
                           />
                         <select  className = 'form-control m-2' name = 'country'  value = {country}
                         onChange = {this.InputHandle}>
                               <option>select country</option>
                               <option value = 'Bangladesh'>Bangladesh</option>
                               <option value = 'Pakistan'>Pakistan</option>
                               <option value = 'India'>India</option>
                               <option value = 'Afganistan'>Afhanistan</option>
                               <option value = 'Chaina'>Chaina</option>
                        </select>
                        <textarea className = 'form-control m-2' name = 'bio' 
                        placeholder = 'Tell me about yourself' value = {bio} onChange = {this.InputHandle} >
                              
                        </textarea>
                        <input  className = 'form-control m-2' type = 'date' 
                        name = 'birthDay' value ={birthDay} onChange = {this.InputHandle} />
                         <div>
                              <input type = 'radio'  name = 'gender' value = 'male'  onChange = {this.InputHandle}/> male
                              <input type = 'radio'  name = 'gender' value = 'female' onChange = {this.InputHandle}/> Female
                              <input type = 'radio'  name = 'gender' value = 'other' onChange = {this.InputHandle}/> Other
                        </div>
                        <div>
                              skills: <br />
                              <input type ='checkbox' name = 'skills' value = 'Java' checked = {skills.includes('Java')} onChange ={this.skillHandelarCahnge} />Java

                              <input type ='checkbox' name = 'skills' value = 'JavaScript' checked = {skills.includes('JavaScript')} onChange ={this.skillHandelarCahnge} />JavaScript

                              <input type ='checkbox' name = 'skills' value = 'Python' checked = {skills.includes('Python')} onChange ={this.skillHandelarCahnge} />Python

                              <input type ='checkbox' name = 'skills' value = 'Golang' checked = {skills.includes('Golang')} onChange ={this.skillHandelarCahnge} />Golang

                        </div>
                        <div>
                              <input type = 'checkbox' name = 'agree' checked ={agree} onChange = {this.checkedHandle}/> I agree to all turms & conditions!
                        </div>
                          <div>
                                <form onSubmit = {this.handleSubmit}>
                                      <input className = 'form-control m-2' type='text' fullname = 'fullname' value = {fullname} placeholder = 'Fullname'/>

                                      <input className = 'form-control m-2' type='email' name = 'email' value = {email} placeholder = 'email'/>

                                      <input className = 'form-control m-2' type='password' name = 'password' value = {password} placeholder = 'password'/>

                                </form>
                          </div>
                        <button className = 'from-control m-' onClick = {() => console.log(this.state)}>
                              show data 
                        </button>
                        
                                            
                  </div>
                  
                  
            )
      }
}
export default Module;