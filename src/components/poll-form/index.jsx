import React from 'react'
import shortid from 'shortid'
import MyForm from './form';

const defaultOptions = [
      {id: shortid.generate(), value: '', vote: 0},
      {id: shortid.generate(), value: '' , vote: 0}
];
class PollForm extends React.Component{
      state = {
            title: '',
            describtion: '',
            options: defaultOptions,
            errors: {}
      };
      handleChange = event =>{
            this.setState({
                  [event.target.name]: event.target.value
            });
      };
      handleOptionChange =(event, index) =>{
            const {options} = this.state
            options[index].value = event.target.value;
            this.setState({options})
      };
      createOption = ()=>{
            const {options} = this.state
            if(options.length < 5){
                  options.push({
                        id: shortid.generate(),
                        value: '',
                        vote: 0
                  });
                  this.setState({options})
            }else{
                  alert('You can create max 5 options')
            }
      };
      deleteOption = index =>{
            const {options} = this.state
            if(options.length > 2){
                  options.splice(index,1)
                  this.setState({options})
            }else{
                  alert('You must have at least two options')
            }
      };
      handleSubmit = event =>{
            event.preventDefault()
            const {isValid, errors}= this.validate();
            if(isValid){
                  const {title, describtion, options} = this.state
                  this.props.submit({
                        title,
                        describtion,
                        options
                  })
                  event.target.reset()
                  this.setState({
                        title: '',
                        describtion: '',
                        options: defaultOptions,
                        errors: {}
                  })
            }else{
                  this.setState({errors})
            }
      };
      validate = () =>{
            const errors = {}
            const {title, describtion, options} = this.state

            if(!title){
                  errors.title = 'Please Provide A Title'
            }else if (title.length < 20){
                  errors.title = 'Title too short'
            }else if(title.length > 100){
                  errors.title = 'Title too Long'
            }

            if(!describtion){
                  errors.describtion = 'Please Provide a describtion'
            }else if(describtion.length > 500){
                  errors.describtion  = 'Describtion too Long'
            }

            const optionsErrors = []
            options.forEach((opt, index)=>{
                  if(!opt.value){
                        optionsErrors[index] = 'Options Text Enpty'
                        // optionsErrors.push('Option Text Too Long')
                  }else if(opt.value.length > 100){
                        optionsErrors[index] = 'Option Text Too Long'
                        // optionsErrors.push('Option Text Too Long')
                  }
            })
            if(optionsErrors.length > 0){
                  errors.options = optionsErrors
            }
            return {
                  errors, 
                  isValid: Object.keys(errors).length === 0
            }
      };
      render(){
            const {title, describtion, options, errors} = this.state
            return(
                  <MyForm
                        title = {title}
                        describtion = {describtion}
                        options = {options}
                        buttonValue = {this.props.buttonValue ||  'Create Poll'}
                        errors = {errors}
                        handleChange={this.handleChange}
                        handleOptionChange={this.handleOptionChange}
                        createOption={this.createOption}
                        deleteOption={this.deleteOption}
                        handleSubmit={this.handleSubmit}
                  />
            )
      }
};
export default PollForm;