import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Container,
  Row,
  Col
} from "react-bootstrap";
import "./sass/scrollbar.css"
import CreatePost from "./components/CreatePost.jsx";

export default function Home() {
  const dummyData = [
    {
      title: "loading",
      author: "loading",
      offer: "loading",
      algorithms: "loading",
      application: "loading",
      details: "loading",
      visibility: 'public'
    },
    {
      title: "loading",
      author: "loading",
      offer: "loading",
      algorithms: "loading",
      application: "loading",
      details: "loading",
      visibility: 'public'
    },
    {
      title: "loading",
      author: "loading",
      offer: "loading",
      algorithms: "loading",
      application: "loading",
      details: "loading",
      visibility: 'public'
    },
    {
      title: "loading",
      author: "loading",
      offer: "loading",
      algorithms: "loading",
      application: "loading",
      details: "loading",
      visibility: 'public'
    },
    {
      title: "loading",
      author: "loading",
      offer: "loading",
      algorithms: "loading",
      application: "loading",
      details: "loading",
      visibility: 'public'
    },
  ];

  const [modalShow, setModalShow] = useState(false);
  const [posts, setPosts] = useState(dummyData);

  useEffect(() => {
    getPosts()
  }, []);

  const getPosts = async () => {
    const response = await fetch("http://localhost:3000/posts")
    const data = await response.json();
    setPosts([])
    data.forEach((el) => {
      if (!posts.includes(el)) setPosts(oldArray => [...oldArray, el])
    })
  }


  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  const cards = [];

  for (let i = 0; i < posts.length; i++) {
    let post = posts[i];
    cards.push(
      
      <Card fluid className="postcard light blue" key={i}>
        <Card.Body className="postcard__text t-dark">
          <Card.Title className="postcard__title blue">
            {" "}
            {post.title}{" "}
            <span className="postcard__subtitle small text-muted" id="author">
              {" "}
              By {post.author}
            </span>{" "}
          </Card.Title>
          <Card.Subtitle className="text-muted mb-2">
            $ {post.offer}
          </Card.Subtitle>
          <time dateTime="2020-05-25">
						<i class="fas fa-calendar-alt mr-2"></i> {post.created_at?.replace(/T(.*)/, '')}
					</time>
          <div className="postcard__bar"></div>  
          <div className="cardSize overflow-auto scrollbar scrollbar-morpheus-den">
         <Card.Text className="postcard__preview-txt">
            <strong>Algorithms:</strong> {post.algorithms}
          </Card.Text>
          <Card.Text className="postcard__preview-txt">
            <strong>Application Process:</strong> {post.application}
          </Card.Text>
          <Card.Text className="postcard__preview-txt">
            <strong>Interview Process:</strong> {post.details}
          </Card.Text>
          </div>
          <ul className="postcard__tagbox">
            {post.title.split(' ').map(el => <li className="tag__item"><i className="fas fa-tag mr-2"></i> {el}</li>)}	
				</ul>
        
        </Card.Body>
       
      </Card>
      
    );
  }

  return (
    <Container fluid className="newlight">

      <h1 className="h1 text-center" id="pageHeaderTitle"> Dashboard </h1>
    
     
      <div className="testingButton">
      <Button variant="primary" onClick={() => setModalShow(true)}>
        {" "}
        <i className="fas fa-plus"></i> Create Post{" "}
      </Button>
      </div>
      {modalShow ? <CreatePost show={modalShow} onHide={() => setModalShow(false)}/> : null }
      {cards}
      
    </Container>
 
  );
}

