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
      title: "Google Web Dev L2",
      author: "Tanner",
      offer: "$300k",
      algorithms: "fizzbuzz, Branch Sums, Same BST",
      application: "I applied through their website. I didn't upload a cover letter, but I did submit my resumeLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices orci elit, ac laoreet nisl tempor vel. Aliquam sollicitudin, dui id porttitor tincidunt, diam metus pellentesque odio, non ornare lorem metus ac ex. Nam eget porttitor elit. Duis sem purus, tincidunt at purus eu, laoreet auctor velit. Nulla semper tincidunt odio. Phasellus scelerisque et dui in tincidunt. Aenean sed ultrices orci. Duis tincidunt nunc quis eros luctus, quis blandit orci placerat. Morbi nulla tellus, tristique non tellus ac, sagittis dictum arcu. Duis tincidunt porttitor felis id tincidunt. Curabitur a aliquam mi. Nunc quis vehicula velit. Donec ultricies eu dui ut rutrum. Phasellus rhoncus neque in dapibus vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla consequat sem odio, sagittis imperdiet quam posuere non. Aenean pharetra purus condimentum, pretium arcu ut, tristique felis. In egestas quis magna ac porta.I applied through their website. I didn't upload a cover letter, but I did submit my resumeLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices orci elit, ac laoreet nisl tempor vel. Aliquam sollicitudin, dui id porttitor tincidunt, diam metus pellentesque odio, non ornare lorem metus ac ex. Nam eget porttitor elit. Duis sem purus, tincidunt at purus eu, laoreet auctor velit. Nulla semper tincidunt odio. Phasellus scelerisque et dui in tincidunt. Aenean sed ultrices orci. Duis tincidunt nunc quis eros luctus, quis blandit orci placerat. Morbi nulla tellus, tristique non tellus ac, sagittis dictum arcu. Duis tincidunt porttitor felis id tincidunt. Curabitur a aliquam mi. Nunc quis vehicula velit. Donec ultricies eu dui ut rutrum. Phasellus rhoncus neque in dapibus vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla consequat sem odio, sagittis imperdiet quam posuere non. Aenean pharetra purus condimentum, pretium arcu ut, tristique felis. In egestas quis magna ac porta.",
      details:
        "I had a phone interview, then they hade me come in person and dance naked for them. After that I was hired on the spot. I wanted them to pay me more, but they said I'd have to do a little more than just dance. I didn't really want to go that far just to get a job, but you gotta do what you gotta do. I did worse for a job at mcdonalds so I did what they told me. At the end of it I now knew how Ian feels on a daily basis. Overall great experiance. 10/10 would 'interview' again ^_- I applied through their website. I didn't upload a cover letter, but I did submit my resumeLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices orci elit, ac laoreet nisl tempor vel. Aliquam sollicitudin, dui id porttitor tincidunt, diam metus pellentesque odio, non ornare lorem metus ac ex. Nam eget porttitor elit. Duis sem purus, tincidunt at purus eu, laoreet auctor velit. Nulla semper tincidunt odio. Phasellus scelerisque et dui in tincidunt. Aenean sed ultrices orci. Duis tincidunt nunc quis eros luctus, quis blandit orci placerat. Morbi nulla tellus, tristique non tellus ac, sagittis dictum arcu. Duis tincidunt porttitor felis id tincidunt. Curabitur a aliquam mi. Nunc quis vehicula velit. Donec ultricies eu dui ut rutrum. Phasellus rhoncus neque in dapibus vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla consequat sem odio, sagittis imperdiet quam posuere non. Aenean pharetra purus condimentum, pretium arcu ut, tristique felis. In egestas quis magna ac porta.",
      visibility: 'public'
    },
    {
      title: "Google Web Dev L2",
      author: "Tanner",
      offer: "$300k",
      algorithms: "fizzbuzz, Branch Sums, Same BST",
      application: "I applied through their website. I didn't upload a cover letter, but I did submit my resumeLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices orci elit, ac laoreet nisl tempor vel. Aliquam sollicitudin, dui id porttitor tincidunt, diam metus pellentesque odio, non ornare lorem metus ac ex. Nam eget porttitor elit. Duis sem purus, tincidunt at purus eu, laoreet auctor velit. Nulla semper tincidunt odio. Phasellus scelerisque et dui in tincidunt. Aenean sed ultrices orci. Duis tincidunt nunc quis eros luctus, quis blandit orci placerat. Morbi nulla tellus, tristique non tellus ac, sagittis dictum arcu. Duis tincidunt porttitor felis id tincidunt. Curabitur a aliquam mi. Nunc quis vehicula velit. Donec ultricies eu dui ut rutrum. Phasellus rhoncus neque in dapibus vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla consequat sem odio, sagittis imperdiet quam posuere non. Aenean pharetra purus condimentum, pretium arcu ut, tristique felis. In egestas quis magna ac porta.I applied through their website. I didn't upload a cover letter, but I did submit my resumeLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices orci elit, ac laoreet nisl tempor vel. Aliquam sollicitudin, dui id porttitor tincidunt, diam metus pellentesque odio, non ornare lorem metus ac ex. Nam eget porttitor elit. Duis sem purus, tincidunt at purus eu, laoreet auctor velit. Nulla semper tincidunt odio. Phasellus scelerisque et dui in tincidunt. Aenean sed ultrices orci. Duis tincidunt nunc quis eros luctus, quis blandit orci placerat. Morbi nulla tellus, tristique non tellus ac, sagittis dictum arcu. Duis tincidunt porttitor felis id tincidunt. Curabitur a aliquam mi. Nunc quis vehicula velit. Donec ultricies eu dui ut rutrum. Phasellus rhoncus neque in dapibus vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla consequat sem odio, sagittis imperdiet quam posuere non. Aenean pharetra purus condimentum, pretium arcu ut, tristique felis. In egestas quis magna ac porta.",
      details:
        "I had a phone interview, then they hade me come in person and dance naked for them. After that I was hired on the spot. I wanted them to pay me more, but they said I'd have to do a little more than just dance. I didn't really want to go that far just to get a job, but you gotta do what you gotta do. I did worse for a job at mcdonalds so I did what they told me. At the end of it I now knew how Ian feels on a daily basis. Overall great experiance. 10/10 would 'interview' again ^_- I applied through their website. I didn't upload a cover letter, but I did submit my resumeLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices orci elit, ac laoreet nisl tempor vel. Aliquam sollicitudin, dui id porttitor tincidunt, diam metus pellentesque odio, non ornare lorem metus ac ex. Nam eget porttitor elit. Duis sem purus, tincidunt at purus eu, laoreet auctor velit. Nulla semper tincidunt odio. Phasellus scelerisque et dui in tincidunt. Aenean sed ultrices orci. Duis tincidunt nunc quis eros luctus, quis blandit orci placerat. Morbi nulla tellus, tristique non tellus ac, sagittis dictum arcu. Duis tincidunt porttitor felis id tincidunt. Curabitur a aliquam mi. Nunc quis vehicula velit. Donec ultricies eu dui ut rutrum. Phasellus rhoncus neque in dapibus vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla consequat sem odio, sagittis imperdiet quam posuere non. Aenean pharetra purus condimentum, pretium arcu ut, tristique felis. In egestas quis magna ac porta.",
      visibility: 'public'
    },
    {
      title: "Google Web Dev L2",
      author: "Tanner",
      offer: "$300k",
      algorithms: "fizzbuzz, Branch Sums, Same BST",
      application: "I applied through their website.",
      details:
        "I had a phone interview, then they hade me come in person and dance naked for them. After that I was hired on the spot.",
      visibility: 'public'
    },
    {
      title: "Amazon Web Dev L3",
      author: "Tanner",
      offer: "No offer",
      algorithms: "Branch Sums, Zigzag Traverse",
      application: "I applied through a staffing agency. They were really nice",
      details: "No interview. Just hired.",
      visibility: 'public'
    },
    {
      title: "Google Web Dev L2",
      author: "Tanner",
      offer: "$300k",
      algorithms: "fizzbuzz, Branch Sums, Same BST",
      application: "I applied through their website.",
      details:
        "I had a phone interview, then they hade me come in person and dance naked for them. After that I was hired on the spot.",
      visibility: 'public'
    },
  ];

  // const [posts, setPosts] = useState([]);

  // const [newPost, setNewPost] = useState([]);
  
  // const [open, setOpen] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  // useEffect(() => {
  //   // Fetch request to get all(?) posts
  // }, []);


  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  const cards = [];

  for (let i = 0; i < dummyData.length; i++) {
    let posts = dummyData[i];
    cards.push(
      
      <Card fluid className="postcard dark blue" key={i}>
        <Card.Body className="postcard__text">
          <Card.Title className="postcard__title blue">
            {" "}
            {posts.title}{" "}
            <span className="postcard__subtitle small text-muted" id="author">
              {" "}
              By {posts.author}
            </span>{" "}
          </Card.Title>
          <Card.Subtitle className="text-muted mb-2">
            {posts.offer}
          </Card.Subtitle>
          <time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i> Tue, Nov 30th 2021
					</time>
          <div className="postcard__bar"></div>  
          <div className="cardSize overflow-auto scrollbar scrollbar-morpheus-den">
         <Card.Text className="postcard__preview-txt">
            <strong>Algorithms:</strong> {posts.algorithms}
          </Card.Text>
          <Card.Text className="postcard__preview-txt">
            <strong>Application Process:</strong> {posts.application}
          </Card.Text>
          <Card.Text className="postcard__preview-txt">
            <strong>Interview Process:</strong> {posts.details}
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
