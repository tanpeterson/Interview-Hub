import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Collapse,
  Accordion,
} from "react-bootstrap";
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
      <Card fill className="post" key={i}>
        <Card.Body>
          <Card.Title>
            {" "}
            {posts.title}{" "}
            <span className="mb-2 fst-italic fs-6 text-muted" id="author">
              {" "}
              By {posts.author}
            </span>{" "}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {posts.offer}
          </Card.Subtitle>
          <div className="cardSize overflow-auto">
          <Card.Text >
            <strong>Algorithms:</strong> {posts.algorithms}
          </Card.Text>
          <Card.Text>
            <strong>Application Process:</strong> {posts.application}
          </Card.Text>
          <Card.Text>
            <strong>Interview Process:</strong> {posts.details}
          </Card.Text>
          </div>
        </Card.Body>
        <div>
          <Button variant="outline-primary" className="ms-2 mb-2">
            {" "}
            <i className="far fa-comment-alt"></i> Comments{" "}
          </Button>
          <Button variant="outline-primary" className="ms-2 mb-2">
            {" "}
            <i className="far fa-heart"></i> Favorite{" "}
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Container>
      <Button className="bth-bth-primary" onClick={() => setModalShow(true)}>
        {" "}
        <i className="fas fa-plus"></i> Create Post{" "}
      </Button>
      {modalShow ? <CreatePost show={modalShow} onHide={() => setModalShow(false)}/> : null }
      {cards}
    </Container>
 
  );
}

// function MyVerticallyCenteredModal(props) {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Modal heading
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <h4>Centered Modal</h4>
//         <p>
//           Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//           dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//           consectetur ac, vestibulum at eros.
//         </p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// Working
// <Card fill>
//   <Card.Body>
//     <Card.Title>{posts.title}</Card.Title>
//     <Card.Subtitle className="mb-2 text-muted">
//       By {posts.author} - {posts.offer}
//     </Card.Subtitle>
//     {/* <Button
//      onClick={()=> setOpen(!open)}
//      aria-controls="collapse-text"
//      aria-expanded={open}> Show More </Button> */}
//     {/* <Collapse in={open}> */}
//       <Card.Text>
//         <strong>Algorithms:</strong> {posts.algorithms}
//       </Card.Text>
//       <Card.Text>
//         <strong>Interview Process:</strong> {posts.details}
//       </Card.Text>
//     {/* </Collapse> */}
//   </Card.Body>
// </Card>

// Accordion attempt
//   <Card fill>
//   <Card.Body>
//     <Card.Title>{posts.title}</Card.Title>
//     <Card.Subtitle className="mb-2 text-muted">
//       By {posts.author} - {posts.offer}
//     </Card.Subtitle>
//     {/* <Button
//      onClick={()=> setOpen(!open)}
//      aria-controls="collapse-text"
//      aria-expanded={open}> Show More </Button> */}
//     {/* <Collapse in={open}> */}
//     <Accordion defaultActiveKey="1" flush>
//       <Accordion.Item eventKey="0">
//           <Accordion.Header>Stuff1</Accordion.Header>
//         <Accordion.Body>
//           <strong>Algorithms:</strong> {posts.algorithms}
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey="1">
//           <Accordion.Header>Stuff2</Accordion.Header>
//         <Accordion.Body>
//         <strong>Interview Process:</strong> {posts.details}
//         </Accordion.Body>
//       </Accordion.Item>
//     </Accordion>
//       {/* <Card.Text>
//       <strong>Interview Process:</strong> {posts.details}
//       </Card.Text> */}
//     {/* </Collapse> */}
//   </Card.Body>
// </Card>
