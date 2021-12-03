import React, { useState } from "react";
import { Button, Form, FormControl, InputGroup, Row, Col, Modal } from "react-bootstrap";

export default function CreatePost(props) {

  const [titleInput, setTitleInput] = useState("");
  const [applicationInput, setApplicationInput] = useState("");
  const [interviewInput, setInterviewInput] = useState("");
  const [offerInput, setOfferInput] = useState("");
  const [algoInput, setAlgoInput] = useState("");
  const [view, setView] = useState("private");

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:3000/posts", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: titleInput, application: applicationInput, details: interviewInput, offer: offerInput, algorithms: algoInput, author: 'Tanner', user_id: 0, visibility: view })
    })
    props.onHide
  }

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Form>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create new post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <Form.Group controlId="formBasicTitle">
            <Form.Control
              className="mb-2"
              type="text"
              placeholder="Enter Job Title"
              onChange={(e) => setTitleInput(e.target.value)}
              value={titleInput}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicText">
          <FormControl
              className="mb-2"
              type="text"
              placeholder="Offer amount"
              onChange={(e) => setOfferInput(e.target.value)}
              value={offerInput}
            />
          <FormControl
              className="mb-2"
              type="text"
              placeholder="What Algorithms were you asked"
              onChange={(e) => setAlgoInput(e.target.value)}
              value={algoInput}
            />

          <Form.Control
              className="mb-2"
              as="textarea"
              placeholder="Describe your Application Process"
              rows={3}
              onChange={(e) => setApplicationInput(e.target.value)}
              value={applicationInput}
            />
          
            <Form.Control
              className="mb-2"
              as="textarea"
              placeholder="Describe your Interview Process"
              rows={3}
              onChange={(e) => setInterviewInput(e.target.value)}
              value={interviewInput}
            />
          </Form.Group>
         
          <Row>
            <Col>
              <Form.Select onSelect={(e) => setView(e.target.value)} onChange={(e) => setView(e.target.value)}>
                <option value="" selected disabled hidden>Visibility</option>
                <option value="public">Public</option>
                <option value="private">Private</option>
              </Form.Select>
            </Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="d-grid gap-2">
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Confirm
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}
