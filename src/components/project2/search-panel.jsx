import React from "react";
import {Input, Button} from 'reactstrap'
import PropTypes from 'prop-types'
const SerPanel = ({term,handleSearch, toggoleForm }) =>(
      <div className='d-flex'>
            <Input
                 className='mr-3'
                  placeholder='Enter search'
                  value={term}
                  onChange={e => handleSearch(e.target.value)}
            />
            <Button color = 'success' onClick={toggoleForm}>
                  New
            </Button>
      </div>
);
SerPanel.propTypes = {
      term: PropTypes.string.isRequired,
      toggoleForm: PropTypes.func.isRequired,
      handleSearch: PropTypes.func.isRequired
}
export default SerPanel;