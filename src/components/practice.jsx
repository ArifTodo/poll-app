import React, {Component} from 'react'

const  MyComponent = () => <h1>My Component</h1>
class Practice extends Component{
      render() {
            const  obj ={
                  title : 'test-title',
                  id : 'h2'
            }
            const name = 'Md arif hosen'

            const bio = (
                  <div>
                        <h3>{name}</h3>
                        <p>This is Arif , I am a job holder & bussinessman</p>
                  </div>
            )
            return (
                  <div className = 'App'>
                        <h2 {...obj}>Welcome to React!</h2>
                        <p>{new Date().toISOString()}</p>
                        <p>my name is {name}</p>
                        <MyComponent/>
                        {bio}
                  </div>
            )
      }
}

export default Practice;

