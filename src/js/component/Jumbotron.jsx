import React from 'react';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const CustomJumbotron = () => {
  return (
    <>
      <Container className="p-5 mb-2 bg-light text-dark">
        <h1>A Warm Welcome!</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
          vitae dolorem velit ab rerum laboriosam dignissimos veniam modi
          praesentium sed sit necessitatibus, nostrum, excepturi facilis quos
          mollitia maiores hic doloribus.
        </p>

        <p>
          <Button variant="primary">Call to action!</Button>
        </p>
      </Container>
      <br />
    </>
  );
};

export default CustomJumbotron;