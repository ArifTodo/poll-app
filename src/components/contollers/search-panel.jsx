import React from "react";
import { Button, Input } from 'reactstrap'
import PropTypes from 'prop-types'
const SearchPanel = ({term, handleSearch, toggoleForm}) =>(
      <div className='d-flex'>
            <Input
                  palceholder='Enter search'
                  value={term}
                  className='mr-3'
                  onChange={e => handleSearch(e.target.value)}
            />
            <Button color ='success' onClick={toggoleForm}>
                  New
            </Button>
      </div>
);
SearchPanel.propTypes = {
      term: PropTypes.string.isRequired,
      handleSearch: PropTypes.func.isRequired,
      toggoleForm: PropTypes.func.isRequired
}
export default SearchPanel;