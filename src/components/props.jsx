import React, {Component} from 'react'
// class Child extends Component{
//       render(){
//             this.props.func(this)
//             return <h1>I am Child</h1>
//       }
// }

// const ChildComponent = props =>(
//       <div>
//             <h3>I am Child Component</h3>
//             <p>I am paragraph;</p>
//             {props.children}
//       </div>
// )
  
class App extends Component{
      // getContext(context){
      //       console.log(context);
      // }
//       constructor (props){
//             super(props);
//             this.count = 5;
//             this.state = {
//                   count : 0
//             };
//       }
// count = 0;

state = {
      count:0,
      lotOfProperties:{}
};

      render(){
            // console.log(this.count);
            // this.getContext(this)
            return (
                  <div>
                        {/* <h1>Why do we need state </h1> */}
                        {/* <h1> Count ={this.state.count} </h1> */}
                        {/* <Child func = {this.getContext} /> */}
                        {/* <ChildComponent>
                              <h2>I am Parent Component</h2>
                              <h4>I am parant paragraph</h4>
                        </ChildComponent> */}
                        {/* <button onClick = {()=>{
                              this.count++;
                              this.setState({});
                              this.setState({count: this.state.count +1});
                              this.state.count = this.state.count + 1;
                              this.setState(prev=>{
                                    return{
                                          count:prev.count + 1
                                    }
                              },()=>{
                                    console.log('clicked', this.state.count);
                              })
                        }}> Add me 1++ </button> */}
                  </div>
            );
      }
}
export default App;