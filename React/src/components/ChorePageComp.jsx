import React from 'react';
import ChoreTableComp from './ChoreTableComp'
import {Container, Row, Col, Button} from 'reactstrap'

const ChorePageComp = (props) => {
  return(
    <>
    <Container>
      <Row>
        <Col><Button>Pending</Button>
        <Button>Completed</Button></Col>
        <Col/>
        <Col/>
        <Col><Button>New Chore</Button>
        <Button>Complete Chore</Button></Col>
      </Row>
      <Row>
        <ChoreTableComp/>
      </Row>
    </Container>
    </>
  )
}

export default ChorePageComp;
