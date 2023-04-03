import React from "react";
import shortid from 'shortid'
import {Modal, ModalBody, ModalHeader} from 'reactstrap'
import ListView from "../listview";
import TableView from "../tableview";
import Controller from "../contollers";
import CreateTodoForm from "../create-todo-form";
class Todos extends React.Component{
      state = {
            todos : [
                  {     id : 'dlfjdf',
                        text : 'simple text',
                        description : 'simple description',
                        time : new Date(),
                        isComplete: false,
                        isSelect: false
                  },
                  {     id : 'dlfjdjhjhj66f',
                        text : 'simple another text',
                        description : 'simple description',
                        time : new Date(),
                        isComplete: false,
                        isSelect :  false
                  },
                  {     id : 'dlfjdj678hj66f',
                  text : 'New task',
                  description : 'simple description',
                  time : new Date(),
                  isComplete: false,
                  isSelect :  false
            }
            ],
            isOpenTodoForm : false,
            searchTerm : '',
            view: 'list',
            filter: 'all'

      };
      toggoleSelect = todoId => {
            const todos = [...this.state.todos]
            const todo = todos.find(t => t.id === todoId)
            todo.isSelect = !todo.isSelect
            this.setState({todos})
      };
      toggoleComplete = todoId => {
            const todos = [...this.state.todos] 
            const todo = todos.find(t => t.id === todoId)
            todo.isComplete = !todo.isComplete
            this.setState({todos})
      };
      toggoleForm = () => {
            this.setState({
                  isOpenTodoForm : !this.state.isOpenTodoForm
            })
      }
      handleSearch = value =>{
            this.setState({searchTerm: value})
      };
      createTodo = todo =>{
            todo.id = shortid.generate()
            todo.time = new Date()
            todo.isComplete = false
            todo.isSelect = false

            const todos = [todo, ...this.state.todos]; 
            this.setState({todos});
            this.toggoleForm();
      };
      handleFilter = filter => {
            this.setState({filter});
      };
      changeView = event => {
            this.setState({view: event.target.value})
      };
      clearSeleted = () => {
            const todos = this.state.todos.filter(todo => !todo.isSelect)
            this.setState({todos})
      };
      clearCompleted = () => {
            const todos = this.state.todos.filter(todo => !todo.isComplete)
            this.setState({todos})
      };
      reset = () => {
            this.setState({
                  filter: 'all',
                  searchTerm : '',
                  view: 'list',
                  isOpenTodoForm : false
            })
      };
      performSearch = () =>{
            return this.state.todos.filter(todo => todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
      }
      perfromFilter = todos =>{
            const {filter} = this.state
            if(filter === 'completed'){
                  return todos.filter(todo => todo.isComplete)

            }else if(filter === 'running'){
                  return todos.filter(todo => !todo.isComplete)
            }else{
                  return todos
            }
      };
      getView = () =>{
            let todos = this.performSearch();
            todos = this.perfromFilter(todos)
            return this.state.view === 'list' ? (
                  <ListView 
                              todos = {todos} 
                              toggoleSelect={this.toggoleSelect} 
                              toggoleComplete={this.toggoleComplete} />
            ):(
                  <TableView 
                  todos = {todos} 
                  toggoleSelect={this.toggoleSelect} 
                  toggoleComplete={this.toggoleComplete} />
            )
      };

      render(){
            return(
                  <div>
                        <h1 className='display-4 text-center mb-5 ' >Todos Stack</h1>
                        <Controller 
                              term={this.state.searchTerm}
                              view ={this.state.view}
                              toggoleForm={this.toggoleForm}
                              handleSearch={this.handleSearch}
                              handleFilter={this.handleFilter}
                              changeView={this.changeView}
                              clearSeleted={this.clearSeleted}
                              clearCompleted={this.clearCompleted}
                              reset={this.reset}
                        />
                        <div>
                              {this.getView()}
                        </div>
                        <Modal
                              isOpen={this.state.isOpenTodoForm}
                              toggle={this.toggoleForm}
                        >
                              <ModalHeader toggole={this.toggoleForm}>
                                    Create new todo item
                              </ModalHeader>
                              <ModalBody>
                                    <CreateTodoForm createTodo={this.createTodo}/>
                              </ModalBody>
                        </Modal>
                  </div>
            )
      }
};
export default Todos;