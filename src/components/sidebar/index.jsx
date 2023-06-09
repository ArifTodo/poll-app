import React from 'react'
import {Input, Button,Modal,ModalHeader,ModalBody} from 'reactstrap'
import PollForm from '../poll-form';
import PollList from './poll-list';

class Sidebar extends React.Component{
      state = {
            openModal: false
      }
      toggoleModal = () =>{
            this.setState({
                  openModal: !this.state.openModal
            })
      }
      render(){
            return(
                  <div style={{background: 'orange' , padding: '10px'}}>
                        <div className='d-flex mb-5'>
                              <Input
                                    type= 'search'
                                    placeholder='Search'
                                    value={this.props.searchTerm}
                                    onChange = {e => this.props.handleSearch(e.target.value)}
                              />
                              <Button
                                    color='success'
                                    className='ml-2'
                                    onClick={this.toggoleModal}
                              >
                                    New
                              </Button>
                        </div>
                        <h3>List of Polls</h3>
                        <hr/>
                              <PollList 
                                    polls={this.props.polls}
                                    selectPoll={this.props.selectPoll}
                              />
                              <Modal isOpen={this.state.openModal} toggle={this.toggoleModal} unmountOnClose={true}>
                                    <ModalHeader toggle={this.toggoleModal}>
                                          Create a New Poll!!
                                    </ModalHeader>
                                    <ModalBody>
                                         <PollForm submit = {this.props.addNewPoll} />
                                    </ModalBody>
                              </Modal>
                  </div>
            )
      }
};

export default Sidebar;