import React from "react";
import Mother from "./mother";
import {Container, Row, Col} from 'reactstrap'
function App2(){
      return(
            <Container className='my-3'>
                  <Row>
                        <Col>
                              <Mother />
                        </Col>
                  </Row>
            </Container>
      )
}
export default App2;