import React from "react";
import PropTypes from 'prop-types'
import {Input,Button,Table} from 'reactstrap'

const RowItem = ({todo, toggoleSelect, toggoleComplete}) =>(
     <tr>
           <th scope='row'>
                 <Input 
                        type='checkbox'
                        id={todo.id}
                        checked={todo.isSelect}
                        onChange={() => toggoleSelect(todo.id)}
                 />
           </th>
           <th>{todo.time.toDateString()}</th>
           <th>{todo.text}</th>
           <th>
                 <Button color={todo.isComplete ? 'danger' : 'success'} onClick={() => toggoleComplete(todo.id)}>
                       {todo.isComplete ? 'Complete' : 'Running'}
                 </Button>
           </th>
     </tr>
);

RowItem.propTypes = {
      todos: PropTypes.object.isRequired,
      toggoleSelect: PropTypes.func.isRequired,
      toggoleComplete: PropTypes.func.isRequired
};

const TableView = ({todos, toggoleSelect, toggoleComplete}) =>(
      <Table>
            <thead>
                  <tr>
                        <td>@</td>
                        <td>Time</td>
                        <td>Todo</td>
                        <td>Action</td>
                  </tr>
            </thead>
            <tbody>
                  {todos.map(todo =>(
                        <RowItem 
                              key={todo.id}
                              todo={todo}
                              toggoleSelect={toggoleSelect}
                              toggoleComplete={toggoleComplete}
                        />
                  ))}
            </tbody>
      </Table>
);

TableView.propTypes = {
      todos: PropTypes.object.isRequired,
      toggoleSelect: PropTypes.func.isRequired,
      toggoleComplete: PropTypes.func.isRequired
}
export default TableView;

