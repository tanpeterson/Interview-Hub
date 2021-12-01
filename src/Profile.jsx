import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Container,
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

  // const [posts, setPosts] = useState([]);

  // const [newPost, setNewPost] = useState([]);
  
  // const [open, setOpen] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [posts, setPosts] = useState(dummyData);

  useEffect(() => {
    getPosts()
  }, []);

  const getPosts = async () => {
    const response = await fetch("http://localhost:3000/posts/profile", {
      method: 'POST',
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify({ user_id: 0 })
    })
    const data = await response.json();
    console.log(data);
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
      
      <Card fluid className="postcard dark blue" key={i}>
        <Card.Body className="postcard__text">
          <Card.Title className="postcard__title blue">
            {" "}
            {post.title}{" "}
            <span className="postcard__subtitle small text-muted" id="author">
              {" "}
              By {post.author}
            </span>{" "}
          </Card.Title>
          <Card.Subtitle className="text-muted mb-2">
            {post.offer}
          </Card.Subtitle>
          <time datetime="2020-05-25 12:00:00">
						<i className="fas fa-calendar-alt mr-2"></i> Tue, Nov 30th 2021
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
					<li className="tag__item"><i className="fas fa-tag mr-2"></i> Google</li>
					<li className="tag__item"><i className="fas fa-tag mr-2"></i> L2 </li>
				</ul>
        
        <div className="mt-2">
        <Button variant="outline-light" >
            {" "}
            <i className="far fa-comment-alt"></i> Comments{" "}
          </Button> 
         <Button variant="outline-light" className="ms-2">
            {" "}
            <i className="far fa-heart"></i> Favorite{" "}
          </Button>
          </div>
        </Card.Body>
       
      </Card>
      
    );
  }

  return (
    <Container fluid className="newdark">
      <Button className="bth-bth-primary" onClick={() => setModalShow(true)}>
        {" "}
        <i className="fas fa-plus"></i> Create Post{" "}
      </Button>
      <h1 className="h1 text-center" id="pageHeaderTitle"> Feed </h1>
      {modalShow ? <CreatePost show={modalShow} onHide={() => setModalShow(false)}/> : null }
      {cards}
    </Container>
 
  );
}
