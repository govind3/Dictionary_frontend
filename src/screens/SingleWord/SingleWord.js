import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteWordAction, updateWordAction } from "../../actions/wordsActions";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";

const  SingleWord = ({ match, history })=> {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [category, setCategory] = useState();

  const dispatch = useDispatch();

  const wordUpdate = useSelector((state) => state.wordUpdate);
  const { loading, error } = wordUpdate;

  const wordDelete = useSelector((state) => state.wordDelete);
  const { loading: loadingDelete, error: errorDelete } = wordDelete;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure to delete this word ?")) {
      dispatch(deleteWordAction(id));
    }
    history.push("/mywords");
  };

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/words/${match.params.id}`);

      setTitle(data.title);
      setContent(data.content);
      setCategory(data.category);
    };

    fetching();
  }, [match.params.id]);

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateWordAction(match.params.id, title, content, category));
    if (!title || !content || !category) return;

    resetHandler();
    history.push("/mywords");
  };

  return (
    <MainScreen title="Edit Word">
      <Card>
        <Card.Header>Edit your Word</Card.Header>
        <Card.Body>
          <Form onSubmit={updateHandler}>
            {loadingDelete && <Loading />}
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {errorDelete && (
              <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
            )}
            <Form.Group controlId="title">
              <Form.Label>English</Form.Label>
              <Form.Control
                type="title"
                placeholder="Enter the English"
                value={title}
                size="lg"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>Hindi</Form.Label>
              <Form.Control
                placeholder="Enter the Word"
                rows={3}
                value={content}
                size="lg"
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="content"
                placeholder="Enter the Category"
                value={category}
                size="lg"
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            {loading && <Loading size={50} />}
            <Button variant="primary" type="submit" style={{marginTop:"5px"}}>
              Update Word
            </Button>
            <Button
              className="mx-2"
              variant="danger"
              onClick={() => deleteHandler(match.params.id)}
              style={{marginTop:"5px"}}
            >
              Delete Word
            </Button>
          </Form>
        </Card.Body>

      </Card>
    </MainScreen>
  );
}

export default SingleWord;