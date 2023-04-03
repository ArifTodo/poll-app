import React from "react";
import { Input, ListGroupItem , ListGroup} from 'reactstrap'
import PropTypes from 'prop-types'
const List = ({todo, toggoleSelect, toggoleComplete}) =>{
      return(
            <ListGroupItem>
                  <Input 
                        type='checkbox'
                        id = {todo.id}
                        checked={todo.isSelect}
                        onChange={() => toggoleSelect(todo.id)}
                  />
                  <div>
                        <h4>{todo.text}</h4>
                        <p>{todo.time.toDateString()}</p>
                  </div>
                  <Button color = {todo.isComplete ? 'danger' : 'success'} onClick={() => toggoleComplete(todo.id)}>
                        {todo.isComplete ? 'Complete' : 'Running'}
                  </Button>
            </ListGroupItem>
      )
};
List.propTypes = {
      todo:PropTypes.object.isRequired,
      toggoleSelect:PropTypes.func.isRequired,
      toggoleComplete:PropTypes.func.isRequired
};
const ListView  = ({todos, toggoleSelect, toggoleComplete}) =>{
      return (
            <ListGroup>
                  {todos.map(todo =>(
                        <List 
                              key={todo.id}
                              todos={todos}
                              toggoleSelect={toggoleSelect}
                              toggoleComplete={toggoleComplete}
                        />
                  ))}
            </ListGroup>
      )
};
ListView.propTypes ={
      todos:PropTypes.object.isRequired,
      toggoleSelect:PropTypes.func.isRequired,
      toggoleComplete: PropTypes.func.isRequired
};
export default ListView;