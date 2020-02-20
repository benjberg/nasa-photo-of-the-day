import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import styled from 'styled-components';

const CBody = styled(CardBody)`
border: black 1px solid;

`;
const Image_box = (props) =>{
    
    return(
        <div>
             <Card>
        <CardImg top width="100%" src={props.img} alt="Outerspace" />
        <CBody >
          <CardTitle>Title: {props.title}</CardTitle>
          <CardSubtitle>Date: {props.date}</CardSubtitle>
          <CardText>Description: {props.explanation}</CardText>
          <Button>Button</Button>
        </CBody>
      </Card>
        </div>
    )
    
}



export default Image_box;