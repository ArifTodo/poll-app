import React from "react";
import PropTypes from 'prop-types'
import {Row, Col}  from 'reactstrap'
import SerPanel from "./search-panel";
import FilterConl from "./filter-contol";
import BulkCont from "./bulk-contol";
import ViewContl from "./view-contol";

const Contolers = ({term,  toggoleForm, handleSearch, handleFilter, clearSeleted,clearCompleted, reset,view,changeView}) =>(
      <div>
            <SerPanel 
                  term = {term}
                  toggoleForm={toggoleForm}
                  handleSearch={handleSearch}
            />
            <Row className='my-4'>
                  <Col md={{size: 4}}>
                        <FilterConl
                              handleFilter={handleFilter}
                        />
                  </Col>
                  <Col md={{size: 4}}>
                        <ViewContl 
                              view={view}
                              changeView={changeView}
                        />
                  </Col>
                  <Col md={{size: 4}} className='d-flex'>
                        <div className='ml-auto'>
                              <BulkCont 
                                    clearSeleted={clearSeleted}
                                    clearCompleted={clearCompleted}
                                    reset={reset}
                              />
                        </div>
                  </Col>
            </Row>
      </div>
);
Contolers.propTypes = {
      term: PropTypes.string.isRequired,
      view: PropTypes.string.isRequired,
      toggoleForm: PropTypes.func.isRequired,
      handleSearch: PropTypes.func.isRequired,
      handleFilter: PropTypes.func.isRequired,
      changeView: PropTypes.func.isRequired,
      clearSeleted: PropTypes.func.isRequired,
      clearCompleted: PropTypes.func.isRequired,
      reset: PropTypes.func.isRequired
}
export default Contolers;