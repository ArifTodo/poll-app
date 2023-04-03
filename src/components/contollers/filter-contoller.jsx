import React from "react";
import PropTypes from 'prop-types'
import { Button, ButtonGroup } from "reactstrap";

const FilterContoller = ({handleFilter})=>(
      <ButtonGroup>
            <Button onClick={() => handleFilter('all')}>All</Button>
            <Button onClick={() => handleFilter('running')}>Running</Button>
            <Button onClick={() => handleFilter('completed')}>Completed</Button>
      </ButtonGroup>
);
FilterContoller.propTypes = {
      handleFilter: PropTypes.func.isRequired
};
export default FilterContoller;