import React from "react";
import PropTypes from 'prop-types'
import { Input, Button, Table } from 'reactstrap'

const View = ({todo, toggoleSelect, toggoleComplete}) =>(
     <tr>
           <th scope='row'>
                 <Input
                       type='checkbox'
                       id={todo.id}
                       checked={todo.isSelect}
                       onChange={e => toggoleSelect(todo.id)}
                 />
           </th>
           <td>{todo.time.toDateString()}</td>
           <td>{todo.text}</td>
           <td>
                 <Button color ={todo.isComplete ? 'danger' : 'success'} onClick={() => toggoleComplete(todo.id)}>
                       {todo.isComplete ? 'Complete' : 'Running'}
                 </Button>
           </td>
     </tr>
);
View.propTypes = {
      todo:PropTypes.object.isRequired,
      toggoleSelect: PropTypes.func.isRequired,
      toggoleComplete: PropTypes.func.isRequired
};
const TablView = ({todos, toggoleSelect, toggoleComplete}) =>(
      <Table>
            <thead>
                  <tr>
                        <td>@</td>
                        <td>name</td>
                        <td>Time</td>
                        <td>Action</td>
                  </tr>
            </thead>
            <tbody>
                        {todos.map(todo =>(
                              <View
                                    key={todo.id}
                                    todo={todo}
                                    toggoleSelect={toggoleSelect}
                                    toggoleComplete={toggoleComplete}
                              />
                        ))}
                  </tbody>
      </Table>
);
TablView.propTypes = {
      todos: PropTypes.object.isRequired,
      toggoleSelect: PropTypes.func.isRequired,
      toggoleComplete: PropTypes.func.isRequired
}
export default TablView;     