import React, { useEffect, useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

export default function Home() {
  const dummyData = [
    {
      title: "Google Web Dev L2",
      author: "Tanner",
      offer: "$300k",
      algorithms: "fizzbuzz, Branch Sums, Same BST",
      details:
        "I had a phone interview, then they hade me come in person and dance naked for them. After that I was hired on the spot.",
    },
    {
      title: "Amazon Web Dev L3",
      author: "Tanner",
      offer: "$300k",
      algorithms: "Branch Sums, Zigzag Traverse",
      details: "No interview. Just hired.",
    },
  ];

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // Fetch request to get all(?) posts
  }, []);

  // const postCard = async () => {
  //   const 
  // }

  const cards = [];

  for (const posts of dummyData) {
    cards.push(
      <Card style={{ width: "16rem" }}>
        <Card.Body>
          <Card.Title>{posts.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            By {posts.author}
          </Card.Subtitle>
          <Card.Text>
            <strong>Algorithms:</strong> {posts.algorithms}
          </Card.Text>
          <Card.Text>
            <strong>Interview Process:</strong> {posts.details}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }

  return (
    <Container>
      <Row>
        <Col></Col>
      </Row>
      <Button>
        {" "}
        <i class="fas fa-plus"></i> Create Post{" "}
      </Button>
      {cards}
      <h1>HOME!!!!</h1>
    </Container>
  );
}
