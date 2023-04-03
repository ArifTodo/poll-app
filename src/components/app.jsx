// import React, {Component} from 'react'
// import './app.css';
// import Profile from './profile'
// // import Bio from './profile/bio'
// // import MyProps from './props';
// // import Skills from './profile/skills';
// // import Props from './props' b
// // import Practice from './practice'
// // import State from './app_state'
// // import Module from './profile/module';
// // import Input from './inputs/index'
// // import SplitFormMultiple from './split-form'
// import App1 from './todos/appnew.jsx'
// import SignUp from './signup-form/signup.jsx'
// import Arif from './signup-form/A.jsx'
// // import Project from './project1/projects.jsx'
// // import Test from './split-form'
// // import Game from './project1/game1'
// // import Game1 from './project1/lesson1'

// class App extends Component{
//       state = {
//             users: []
//       };
//       createUser = user =>  {
//             user.id = new Date().getTime().toString()
//             this.setState({ users : [...this.state.users,user]})
//       }
//       render() {          
//             return (
//                   <div className = 'App'>
//                      <Profile/>
//                      {/* <Bio name = 'test name' title = 'test title' /> */}
//                      <div>
//                            {/* <h3>List of Programmers......</h3> */}
//                            {/* <p>Mr: X</p> */}
//                            {/* <Skills skillA = 'React' skillB ='Angular' skillC ='Vue' /> */}
//                            {/* <p>Mr: Y</p> */}
//                            {/* <Skills skillA = 'NodeJs' skillB = 'ExpressJs' skillC = 'MongoDb' /> */}
//                            {/* <MyProps name = 'arif'/>  */}
//                            {/* <MyProps name = 'rajib'/> */}
//                            {/* <Props /> */}
//                            {/* <Practice /> */}
//                            {/* <State />  */}
//                         {/* <Module  /> */}

//                            {/* <Input /> */}
//                            {/* <SplitFormMultiple /> */}
//                            <SignUp createUser = {this.createUser}/>
//                            <Arif createUser = {this.createUser}/>
//                            <App1 />
//                            {/* <Game /> */}
//                            {/* <Game1/> */}
//                            {/* <Project /> */}
//                            {/* <Test /> */}
//                            <div>
//                                  <h3 className = 'my-5'>All Registered Users</h3>
//                                  <ul className = 'list-group'>
//                                       {this.state.users.map(user => (<li key={user.id} className ='list-group-item'>
//                                             {user.name} - {user.email}
//                                       </li>))}
//                                  </ul>
//                            </div>
//                      </div>
//                   </div>
                  
//             );
//       }
// }

// export default App;


// import React from "react";
// import Todos from "./todos/index";
// class App extends React.Component{
//       render(){
//             return(
//                   <div>
//                         <h1>Stack learner!!!!!</h1>
//                         <Todos />
//                   </div>
//             )
//       }
// };

import React from "react";
import './app.css'
// import App2 from "./father";
// import Project from "./game";
// import Game from "./project1/lesson1";
import {Container, Row, Col} from 'reactstrap'
import Polls from "./polls";
// import App from "./chatgpt";


// import Todos from './todos/index'
// import Todho from "./project2";
function App1(){
     return(
      <Container className='my-5'>
            <Row>
                  <Col>
                        {/* <Todos /> */}
                        {/* <App2/> */}
                        {/* <Todho /> */}
                        {/* <Game /> */}
                        {/* <Project /> */}
                        <Polls />
                        {/* <App/> */}
                  </Col>
            </Row>
      </Container>
     )
};
export default App1;
