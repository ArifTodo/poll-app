import React from "react";
import PropTypes from 'prop-types'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
class CreateTodoForm extends React.Component{
      state = {
            text:'',
            description: ''
      };
      handleClick = event =>{
            this.setState({
                  [event.target.name] : event.target.value
            })
      };
      handleSubmit = event =>{
            event.preventDefault();
            this.props.createTodo(this.state);
            event.target.reset();
            this.setState({
                  text:'', description:''
            })
      }
      render(){
            return(
                  <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                              <Label>Enter Task</Label>
                              <Input 
                                    placeholder = 'write some text'
                                    name = 'text'
                                    value= {this.state.text}
                                    onChange={this.handleClick}
                              />
                        </FormGroup>
                        <FormGroup>
                              <Label> Description Task</Label>
                              <Input 
                                    type= 'textarea'
                                    placeholder = 'write some sort description about your task'
                                    name = 'description'
                                    value= {this.state.description}
                                    onChange={this.handleClick}
                              />
                        </FormGroup>
                        <Button type='submit'>Create task</Button>
                  </Form>
            )
      }
};
CreateTodoForm.propTypes ={
      createTodo:PropTypes.func.isRequired
}
export default CreateTodoForm;