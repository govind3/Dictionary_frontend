import React, { useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createWordAction } from "../../actions/wordsActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

function CreateWord({ history }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  const wordCreate = useSelector((state) => state.wordCreate);
  const { loading, error } = wordCreate;

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (!title || !content || !category) {
      return;
    }
    dispatch(createWordAction(title, content, category));
    resetHandler();
    history.push("/mywords");
  };

  return (
    <MainScreen title="ADD A Word">
      <Card>
        <Card.Header>Add a new word</Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            <Form.Group controlId="title">
              <Form.Label>English</Form.Label>
              <Form.Control
                type="title"
                value={title}
                placeholder="Enter the Word"
                size="lg"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              controlId="content"
              size="lg"
              style={{ marginTop: "9px" }}
            >
              <Form.Select
                size="lg"
                style={{
                  marginTop: "9px",
                  marginBottom: "9px",
                  width: "100%",
                  height: "37px",
                  textSize: "12px",
                }}
              >
                <option value="">Hindi</option>
                <option value="1">French</option>
                <option value="2">Spanish</option>
              </Form.Select>
              <Form.Control
                text="content"
                value={content}
                placeholder="Enter the word"
                rows={3}
                size="lg"
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="content" style={{ marginTop: "9px" }}>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="content"
                value={category}
                size="lg"
                placeholder="Enter the Category"
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            {loading && <Loading />}
            <Button
              type="submit"
              variant="primary"
              style={{ marginTop: "5px" }}
            >
              Add Word
            </Button>
            <Button
              className="mx-2"
              onClick={resetHandler}
              variant="info"
              style={{ marginTop: "5px" }}
            >
              Reset Feilds
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </MainScreen>
  );
}

export default CreateWord;
