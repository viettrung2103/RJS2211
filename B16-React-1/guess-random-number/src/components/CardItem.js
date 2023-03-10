import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardItem({ dataItem }) {
  console.log(dataItem);
  return (
    <Card style={{ width: "15 rem" }}>
      <Card.Img variant="top" src={dataItem.img} />
      <Card.Body>
        <Card.Title>{dataItem.name} </Card.Title>
        <Card.Text>{dataItem.price} </Card.Text>
        <Button variant="primary">Go detail</Button>
      </Card.Body>
    </Card>
  );
}

export default CardItem;
