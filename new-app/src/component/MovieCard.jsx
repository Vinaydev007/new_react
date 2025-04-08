import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function MovieCard({props}) {
    console.log(props)
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        {props.desc}
      </Card.Text>
      <Button variant="primary">{props.model}</Button>
    </Card.Body>
  </Card>
  )
}
