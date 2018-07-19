import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { Col, Row, Container } from "./components/Grid";
import Video from "./components/Video";
import QuoteGenerator from "./components/QuoteGenerator";
import Table from "./components/Table";
import Footer from "./components/Footer";


const App = () => (
 
    <Container style={{ marginTop: 40 }}>
        
      <QuoteGenerator/>
      
      <Row>
        <Col size="md-4">
          {/* <h5>Exercise Playlist</h5> */}
          <Video/>         
        </Col>
        <Col size="md-8">
        {/* <h5>Workout of the Day</h5> */}
        <Table/>

        </Col>
      </Row> 
      <Footer/>
    </ Container>
   
);

export default App;