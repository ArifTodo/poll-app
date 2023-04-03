import React from "react";
import PropTypes from 'prop-types'
import { Button, ButtonGroup } from "reactstrap";

const BulkContoller = ({clearSeleted, clearCompleted, reset})=>(
      <ButtonGroup>
            <Button color='danger'  onClick={clearSeleted}>clearSeleted</Button>
            <Button color='danger' onClick={clearCompleted}>clearCompleted</Button>
            <Button color='danger' onClick={reset}>reset</Button>
      </ButtonGroup>
);
BulkContoller.propTypes = {
      clearSeleted: PropTypes.func.isRequired,
      clearCompleted: PropTypes.func.isRequired,
      reset: PropTypes.func.isRequired
};
export default BulkContoller;