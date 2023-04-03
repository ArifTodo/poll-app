import React from "react";
import shortid from "shortid";
import {Modal, ModalBody, ModalHeader} from 'reactstrap'
import Contolers from "./contollers";
import CreateTdForm from "./create-todo-form";
import ListView from "../listview";
import TablView from "./tableview";
class Todho extends React.Component{
      state = {
            todos : [
                  {
                        id : 'ldfgjdlfgj',
                        text: 'write some code',
                        description:'simple description',
                        time: new Date(),
                        isComplete: false,
                        isSelect: false
                  },
                  {
                        id : 'ldfgjdlfg6657j',
                        text: 'write somthing',
                        description:'simple description',
                        time: new Date(),
                        isComplete: false,
                        isSelect: false
                  },
                  {
                        id : 'ld6657j',
                        text: 'new trade',
                        description:'simple description',
                        time: new Date(),
                        isComplete: false,
                        isSelect: false
                  }
            ],
            isOpenTodoForm: false,
            searchTerm: '',
            view: 'list',
            filter: 'all'
      };
      toggoleSelect = todoId=>{
            const todos = [...this.state.todos]
            const todo = todos.find(t =>t.id === todoId)
            todo.isSelect = !todo.isSelect;
            this.setState({todos})
      };
      toggoleComplete = todoId =>{
            const todos = [...this.state.todos]
            const todo = todos.find(t=> t.id === todoId)
            todo.isComplete = !todo.isComplete
            this.setState({todos})
      };
      toggoleForm = () =>{
            this.setState({
                  isOpenTodoForm: !this.state.isOpenTodoForm
            })
      };
      handleSearch = value =>{
            this.setState({
                  searchTerm: value
            })
      };
      createTodo = todo =>{
            todo.id = shortid.generate()
            todo.time = new Date()
            todo.isComplete = false
            todo.isSelect = false

            const todos = [todo, ...this.state.todos]
            this.setState({todos})
            this.toggoleForm()
      }
      handleFilter = filter => {
            this.setState({filter})
      }
      changeView = event => {
            this.setState({view: event.target.value})
      }
   clearSeleted = () =>{
         const todos = this.state.todos.filter(todo => !todo.isSelect)
         this.setState({todos})
   };
   clearCompleted= () =>{
         const todos = this.state.todos.filter(todo => !todo.isComplete)
         this.setState({todos});
   }
   reset = () =>{
         this.setState({
            isOpenTodoForm: false,
            searchTerm: '',
            view: 'list',
            filter: 'all'
         })
   }

      getView = () =>{
            let todos = this.performSearch();
            todos = this.performFilter(todos)
            return this.state.view === 'list' ? (
                  <ListView
                        todos={todos}
                        toggoleSelect={this.toggoleSelect}
                        toggoleComplete={this.toggoleComplete}
                  />
            ):(
                  <TablView 
                        todos={todos}
                        toggoleSelect={this.toggoleSelect}
                        toggoleComplete={this.toggoleComplete}
                  />
            );
      };
      performFilter = todos =>{
            const {filter} = this.state
            if(filter === 'completed'){
                  return todos.filter(todo => todo.isComplete)
            }else if(filter === 'running'){
                  return todos.filter(todo => !todo.isComplete)
            }else{
                  return todos
            }
      }
      performSearch = ()=>{
           return this.state.todos.filter(todo => todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
      }
      render(){
            return(
                  <div>
                        <h1 className='text-center'>Stuck todho111</h1>
                        <Contolers 
                              term={this.state.searchTerm}
                              view = {this.state.view}
                              toggoleForm={this.toggoleForm}
                              handleSearch={this.handleSearch}
                              changeView={this.changeView}
                              handleFilter={this.handleFilter}
                              clearSeleted={this.clearSeleted}
                              clearCompleted={this.clearCompleted}
                              reset = {this.reset}
                        />
                        <div>
                             {this.getView()} 
                        </div>
                        
                        <Modal isOpen = {this.state.isOpenTodoForm}
                        toggle = {this.toggoleForm}
                        >
                              <ModalHeader toggle= {this.toggoleForm}>
                                    Create new todo form
                              </ModalHeader>
                              <ModalBody>
                                    <CreateTdForm createTodo={this.createTodo}/>
                              </ModalBody>
                        </Modal>
                  </div>
            )
      }
};
export default Todho;