import React from 'react'
import {Modal, ModalHeader, ModalBody} from 'reactstrap'
import MyForm from '../poll-form/form';
import ParticipateForm from './participate-form';
class MainContent extends React.Component{
      state = {
            openModal: false
      }
      toggoleModal = ( ) => {
            this.setState({
                  openModal: !this.state.openModal
            })
      };
      render(){
            if(Object.keys(this.props.poll).length === 0){
                  return(
                        <div>
                              <h4>Welcome to my Aplication</h4>
                              <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet provident ut reiciendis at officiis, eaque debitis molestiae sint ex nemo!
                              </p>
                        </div>
                  )
            };
            const {poll, getOption, updatePoll, deletePoll} = this.props
            console.log('selectedPoll = ',poll)
            return(
                  <div>
                        <h3>poll.title</h3>
                        <p>poll.describtion</p>
                        <br/>
                       <ParticipateForm
                              poll = {poll}
                              getOption={getOption}
                              toggoleModal={this.toggoleModal}
                              deletePoll = {deletePoll}
                       />
                       <Modal
                        isOpen = {this.state.openModal}
                        toggle = {this.toggoleModal}
                        unmountOnClose={true}
                       >
                             <ModalHeader toggle={this.toggoleModal}>
                                    Update Model
                             </ModalHeader>
                             <ModalBody>
                                   <MyForm
                                          poll = {poll}
                                          isUpdate={true}
                                          submit={updatePoll}
                                          buttonValue='Update Poll'
                                   />
                             </ModalBody>
                       </Modal>
                  </div>
            )
      }
};
export default MainContent;