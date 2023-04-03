import React from "react";
import PropTypes from 'prop-types'
import {ListGroup, ListGroupItem, Input, Button} from 'reactstrap'

const ListItem = ({todo, toggoleSelect, toggoleComplete}) => {
      return(
            <ListGroupItem className= 'd-flex align-items-center'>
                  <Input 
                        type = 'checkbox'
                        id={todo.id}
                        checked={todo.isSelect}
                        onChange={() => toggoleSelect(todo.id)}
                  />
                  <div className='mx-3'>
                        <h4>{todo.text}</h4>
                        <p>{todo.time.toDateString()}</p>
                  </div>
                  <Button className='ml-auto' color={todo.isComplete ? 'danger' : 'success'} onClick={() => toggoleComplete(todo.id)}>
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
      todos:PropTypes.object.isRequired,
      toggoleSelect: PropTypes.func.isRequired,
      toggoleComplete:PropTypes.func.isRequired
}
export default ListView;