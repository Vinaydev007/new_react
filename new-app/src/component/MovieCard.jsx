import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function MovieCard(props) {
    console.log(props)
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.product.image} />
    <Card.Body>
      <Card.Title>{props.product.title}</Card.Title>
      <Card.Text>
        {props.product.desc}
      </Card.Text>
      <Button variant="primary">{props.product.model}</Button>
    </Card.Body>
  </Card>
  )
}
