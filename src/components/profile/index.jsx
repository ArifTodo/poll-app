import React from 'react'
import './profile.style.css'
import './color.css'

// import SplitForm from './form'
// import Form from './form'
import Module from './module'
// import Bio from './bio'
// import Skills from './skills'
// import Links from './links'

import BoxA from './box_a'
import BoxB from './box_b'
import Button from './button'
class Profile extends React.Component{

      me = {
            name:'Md Arif  Hosen',
            title:'Web Developer, HTML, CSS, JavaScript.',
            skillA:'Java',
            skillB:'JavaScript',
            skillC:'Python'
      }

      // m = {
      //       name :'arif',
      //       title:'hosen'
      // }
      render(){
            // console.log('Profile -', this.props)
            return (
                  <div className = 'container'>
                       
                      {/* <Bio name = {this.me.name} title = {this.me.title}/> */}
                      {/* <Skills skillA = 
                      {this.me.skillA} 
                      skillB = {this.me.skillB} 
                      skillC = {this.me.skillC} />
                      <Links /> */}
                      <Module name = {this.me.name} title = {this.me.title} />

                      <Button>click me </Button>
                      <BoxA />
                      <BoxB />
                      <button className = 'button'>another</button>
                      {/* <button>click me2</button> */}
                        {/* <Form /> */}
                        {/* <SplitForm /> */}
                  </div>
            );
      }
}

export default Profile;

