import React from "react";
import PropTypes from 'prop-types'
import {Button, ButtonGroup} from 'reactstrap'

const BulkCont= ({clearSeleted,clearCompleted, reset}) =>(
      <ButtonGroup>
            <Button color='danger' onClick={clearSeleted}>ClearSelected</Button>
            <Button color='danger' onClick={clearCompleted}>ClearCompleted</Button>
            <Button color='danger' onClick={reset}>Reset</Button>
      </ButtonGroup>
);
BulkCont.propTypes = {
      clearSeleted: PropTypes.func.isRequired,
      clearCompleted: PropTypes.func.isRequired,
      reset: PropTypes.func.isRequired
};
export default BulkCont;