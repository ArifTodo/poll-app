import React from "react";
import {Row, Col} from 'reactstrap'
import PropTypes from 'prop-types'
import SearchPanel from "./search-panel";
import FilterContoller from "./filter-contoller";
import ViewContoller from "./view-contolloer";
import BulkContoller from "./bulk-contoller";

const Controller = ({
      term, 
      handleSearch,
      toggoleForm,
      handleFilter, 
      view, 
      changeView,
      clearSeleted,
       clearCompleted,
       reset
      })=>(
      <div>
            <SearchPanel 
                  term={term}
                  handleSearch={handleSearch}
                  toggoleForm={toggoleForm}
            />
            <Row className='my-4'>
                  <Col md={{size : 4}}>
                        <FilterContoller handleFilter={handleFilter}/>
                        </Col>
                  <Col md={{size : 4}}>
                        <ViewContoller view={view} changeView={changeView} />
                  </Col>
                  <Col md={{size : 4}} className='d-flex'>
                        <div className='ml-auto'>
                              <BulkContoller 
                              clearSeleted={clearSeleted} 
                              clearCompleted={clearCompleted} 
                              reset={reset} 
                              />
                        </div>
                  </Col>
            </Row>
      </div>
);
Controller.propTypes={
      term:PropTypes.string.isRequired,
      view:PropTypes.string.isRequired,
      handleSearch:PropTypes.func.isRequired,
      toggoleForm:PropTypes.func.isRequired,
      handleFilter: PropTypes.func.isRequired,
      changeView:PropTypes.func.isRequired,
      clearSeleted:PropTypes.func.isRequired,
      clearCompleted:PropTypes.func.isRequired,
      reset:PropTypes.func.isRequired
}
export default Controller;