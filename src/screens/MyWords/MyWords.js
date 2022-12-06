import React, { useEffect, useState } from "react";
import { Accordion, Button, Card, Container, Badge } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import SearchBar from "../../components/SearchBar";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { deleteWordAction } from "../../actions/wordsActions";
import { useDispatch, useSelector } from "react-redux";
import { listWords } from "../../actions/wordsActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

const MyWords = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const wordList = useSelector((state) => state.wordList);
  const { loading, error, words } = wordList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const wordCreate = useSelector((state) => state.wordCreate);
  const { success: successCreate } = wordCreate;

  const wordUpdate = useSelector((state) => state.wordUpdate);
  const { success: successUpdate } = wordUpdate;

  const wordDelete = useSelector((state) => state.wordDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = wordDelete;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure to delete this word?")) {
      dispatch(deleteWordAction(id));
    }
  };

  const history = useHistory();

  useEffect(() => {
    dispatch(listWords());
    if (!userInfo) {
      history.push("/");
    }
  }, [
    dispatch,
    history,
    userInfo,
    successCreate,
    successUpdate,
    successDelete,
  ]);

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey);

    return <button onClick={decoratedOnClick}>{children}</button>;
  }

  return (
    <div>
      <Container>
        <SearchBar setSearch={setSearch} />
        <br />
      </Container>
      <MainScreen title="Dictionary">
        <Link to="/addword">
          <Button style={{ marginRight: 10, marginBottom: 6 }} size="lg">
            +Add Word
          </Button>
        </Link>
        {errorDelete && (
          <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
        )}
        {loadingDelete && <Loading />}
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading></Loading>}
        {words
          ?.reverse()
          .filter((filteredWord) =>
            filteredWord.title.toLowerCase().startsWith(search.toLowerCase())
          )
          .map((word) => (
            <Accordion key={word._id}>
              <Card style={{ margin: 10 }}>
                <Card.Header style={{ display: "flex" }}>
                  <span
                    style={{
                      color: "black",
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18,
                    }}
                  >
                    <CustomToggle eventKey="0">{word.title}</CustomToggle>
                  </span>
                  <div>
                    <Button href={`/word/${word._id}`}>Edit</Button>
                    <Button
                      onClick={() => deleteHandler(word._id)}
                      variant="danger"
                      className="mx-2"
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <h4>
                      <Badge bg="success" className="badge badge-dark">
                        Category-{word.category}
                      </Badge>
                    </h4>
                    <blockquote className="blockquote mb-0">
                      <p>{word.content}</p>
                    </blockquote>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          ))}
      </MainScreen>
    </div>
  );
};

export default MyWords;
