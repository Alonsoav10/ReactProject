import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function ItemDetail({item}) {
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
        Un clásico que perdura en el tiempo. Las Nike Air Force 1 '07 son unas zapatillas urbanas con las que lucirás increíble.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Precio: ${item.price}</ListGroup.Item>
        <ListGroup.Item>Stock disponible: {item.stock}uni.</ListGroup.Item>
        
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Añaidas al carrito</Card.Link>
        
      </Card.Body>
    </Card>
  );
}

export default ItemDetail;