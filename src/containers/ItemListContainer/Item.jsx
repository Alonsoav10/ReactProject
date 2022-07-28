import React from 'react'
import {Button} from 'react-bootstrap'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const Item = ({item}) => {
  const {name, price, stock, image} = item

  return (
        <Card style={{ width: '18rem', margin:20 }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title> {name}</Card.Title>
            <Card.Text>
              <p>Precio: {price}</p>
              <p>stock: {stock}</p>
            </Card.Text>
            <Link to='/detalle/${id}'>            
              <Button variant="primary">Ver mas</Button>
            </Link>
          </Card.Body>
        </Card>

  )
}

export default Item