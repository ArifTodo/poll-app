import React from "react";
import {Input, Button, Table} from 'reactstrap'
import PropTypes from 'prop-types'

const TableItem = ({todo, toggoleSelect, toggoleComplete})=>(
      <tr>
            <th>
                  <Input 
                        type='checkbox'
                        todo={todo.id}
                        checked={todo.isSelect}
                        onChange={() => toggoleSelect(todo.id)}
                  />
            </th>
            <th>
                  <h4>{todo.text}</h4>
                  <p>{todo.time.toDateString()}</p>
            </th>
            <Button color={todo.isComplete ? 'danger' : 'success'} onClick={() => toggoleComplete(todo.id)}>
                  {todo.isComplete ? 'Complete' : 'Running'}
            </Button>
      </tr>
);
TableItem.propTypes = {
      todo: PropTypes.object.isRequired,
      toggoleSelect: PropTypes.func.isRequired,
      toggoleComplete: PropTypes.func.isRequired
};

const TableView = ({todos, toggoleSelect, toggoleComplete})=>{
      <Table>
            <thead>
                  <th>#</th>
                  <th>Todo</th>
                  <th>Time</th>
                  <th>Action</th>
            </thead>
            <tbody>
                  {todos.map(todo =>(
                        <TableItem 
                              key={todo.id}
                              todo={todo}
                              toggoleSelect={toggoleSelect}
                              toggoleComplete={toggoleComplete}
                        />
                  ))}
            </tbody>
      </Table>
};

TableView.propTypes = {
      todo: PropTypes.object.isRequired,
      toggoleSelect: PropTypes.func.isRequired,
      toggoleComplete: PropTypes.func.isRequired
};
export default TableView;