import React from 'react';
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Grid = () => {
  return (
    <CardGroup>
      <Row>
        {Array.from({ length: 4 }).map((_, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <Card.Img 
                variant="top" 
                src="https://via.placeholder.com/500x325" 
                className="img-fluid" 
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <Card.Body className="text-center">
                <Card.Title>Card title {index + 1}</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-center">
                <Button variant="primary">Find Out More!</Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </CardGroup>
  );
}

export default Grid;
