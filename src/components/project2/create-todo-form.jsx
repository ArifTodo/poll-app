import React from "react";
import {Form, FormGroup, Label, Input,Button} from 'reactstrap'
import PropTypes from 'prop-types'
class CreateTdForm extends React.Component{
      state = {
            text: '',
            description: ''
      }
      handleClick = event =>{
            this.setState({
                  [event.target.name] : event.target.value
            })
      }
    handleSubmit = event =>{
          event.preventDefault()
          event.target.reset()
          this.props.createTodo(this.state)
          this.setState({
                  text: '', description: ''
          })
    }
      render(){
            return(
                  <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                              <Label>Enter Task</Label>
                              <Input
                                    name= 'text'
                                    placeholder='Enter search'
                                    value={this.state.text}
                                    onChange={this.handleClick}
                              />
                        </FormGroup>
                        <FormGroup>
                              <Label>Enter Task</Label>
                              <Input
                                    type='textarea'
                                    name= 'description'
                                    placeholder='Enter description'
                                    value={this.state.description}
                                    onChange={this.handleClick}
                              />
                        </FormGroup>
                        <Button type='submit'> Create task</Button>
                  </Form>
            )
      }
};
CreateTdForm.propTypes={
     createTodo: PropTypes.func.isRequired
}
export default CreateTdForm;