import React from "react";
import PropTypes from 'prop-types'
import { ListGroupItem, ListGroup, Button, Input} from "reactstrap";
const ListItem = ({todo, toggoleSelect, toggoleComplete}) =>{
      return(
            <ListGroupItem>
                  <Input 
                        type = 'checkbox'
                        id = {todo.id}
                        checked={todo.isSelect}
                        onChange={() => toggoleSelect(todo.id)}
                  />
                  <div>
                        <h4>{todo.text}</h4>
                        <p>{todo.time.toDateString()}</p>
                  </div>
                  <Button color= {todo.isComplete ? 'danger' : 'success'} onClick={() => toggoleComplete(todo.id)} >
                        {todo.isComplete ? 'Completed' : 'Running'}
                  </Button>
            </ListGroupItem>
      )
};
ListItem.propTypes = {
      todo: PropTypes.object.isRequired,
      toggoleSelect: PropTypes.func.isRequired,
      toggoleComplete: PropTypes.func.isRequired
};

const ListView = ({todos, toggoleSelect, toggoleComplete}) =>{
      return(
            <ListGroup>
                  {todos.map(todo =>(
                        <ListItem 
                              key={todo.id}
                              todo={todo}
                              toggoleSelect={toggoleSelect}
                              toggoleComplete={toggoleComplete}
                        />
                  ))}
            </ListGroup>
      )
};

ListView.propTypes = {
      todos: PropTypes.object.isRequired,
      toggoleSelect: PropTypes.func.isRequired,
      toggoleComplete: PropTypes.func.isRequired
};

export default ListView;