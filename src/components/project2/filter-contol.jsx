import React from 'react'
import PropTypes from 'prop-types'
import {Button, ButtonGroup} from 'reactstrap'

const FilterConl = ({handleFilter}) =>(
      <ButtonGroup>
            <Button  onClick={() => handleFilter('All')}>All</Button>
            <Button onClick={() => handleFilter('running')}>Running</Button>
            <Button  onClick={() => handleFilter('completed')}>Complete</Button>
      </ButtonGroup>
);
FilterConl.propTypes = {
      handleFilter: PropTypes.func.isRequired
}
export default FilterConl;