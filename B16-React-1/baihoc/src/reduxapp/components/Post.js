import React from "react";
import { useSelector } from "react-redux";

import { Row, Card, Button } from "react-bootstrap";

const Post = () => {
  const posts = useSelector((state) => state.posts);
  return (
    <div>
      <h1>Post List</h1>
      <Row>
        {posts.map((item, index) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.comment}</Card.Text>
                <Card.Text>{item.rating}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </div>
  );
};

export default Post;
