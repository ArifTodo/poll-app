import React from "react";
import ListView from "./listview";
import TableView from "./tableview";


class Mother extends React.Component{
      state = {
            todos : [
                  {
                        id:'djfldkjfdl',
                        text : 'Simple text',
                        describtion: 'Simple describtion',
                        time: new Date(),
                        isSelect: false,
                        isComplete: false
                  },
                  {
                        id:'djfry5r46y7jfdl',
                        text : 'Simple text',
                        describtion: 'Simple describtion',
                        time: new Date(),
                        isSelect: false,
                        isComplete: false
                  }
            ]
      };
      toggoleSelect = todoId => {};
      toggoleComplete = todoId => {};

      render(){
            return(
                  <div>
                        <h1 className='desplay-4 text-center ml-10'>ArifTodos!!!!!!</h1>
                        <div>
                              <ListView 
                                     todos = {this.state.todos}
                                     toggoleSelect={this.toggoleSelect}
                                     toggoleComplete={this.toggoleComplete}
                              />
                        </div>
                        <div>
                             <TableView 
                               todos = {this.state.todos}
                               toggoleSelect={this.toggoleSelect}
                               toggoleComplete={this.toggoleComplete}
                             />
                        </div>
                        
                  </div>
            )
      }
};
export default Mother;