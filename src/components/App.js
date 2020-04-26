import React from 'react'
import Rank from './Rank'
import SuggestedProjectCard from './SuggestedProjectCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const App = props => {
  return (
    <Container>
        <Row>
          <Col sm={12} md={6} lg={4}>
           <SuggestedProjectCard/>
          </Col>
          <Col sm={12} md={6} lg={4}>
           <Rank/>
          </Col>
        </Row>
    </Container>
    
  )
}

export default App