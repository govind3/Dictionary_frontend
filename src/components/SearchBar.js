import React from "react";
import { Table } from "react-bootstrap";
import { Form, FormControl } from "react-bootstrap";

const SearchBar = ({ setSearch }) => {
  const filter = (value) => {
    setSearch(value);
  };
  return (
    <div className="mt-3">
      <Form>
        <Form.Label>
          <h3>Search Word here</h3>
        </Form.Label>
        <FormControl
          size="lg"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form>
      <div style={{ textAlign: "center", marginTop: "15px" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>
                <button onClick={() => filter("a")}>a</button>
              </th>
              <th>
                <button onClick={() => filter("b")}>b</button>
              </th>
              <th>
                <button onClick={() => filter("c")}>c</button>
              </th>
              <th>
                <button onClick={() => filter("d")}>d</button>
              </th>
              <th>
                <button onClick={() => filter("e")}>e</button>
              </th>
              <th>
                <button onClick={() => filter("f")}>f</button>
              </th>
              <th>
                <button onClick={() => filter("g")}>g</button>
              </th>
              <th>
                <button onClick={() => filter("h")}>h</button>
              </th>
              <th>
                <button onClick={() => filter("i")}>i</button>
              </th>
              <th>
                <button onClick={() => filter("j")}>j</button>
              </th>
              <th>
                <button onClick={() => filter("k")}>k</button>
              </th>
              <th>
                <button onClick={() => filter("l")}>l</button>
              </th>
              <th>
                <button onClick={() => filter("m")}>m</button>
              </th>
            </tr>
            <tr>
              <th>
                <button onClick={() => filter("n")}>n</button>
              </th>
              <th>
                <button onClick={() => filter("o")}>o</button>
              </th>
              <th>
                <button onClick={() => filter("p")}>p</button>
              </th>
              <th>
                <button onClick={() => filter("q")}>q</button>
              </th>
              <th>
                <button onClick={() => filter("r")}>r</button>
              </th>
              <th>
                <button onClick={() => filter("s")}>s</button>
              </th>
              <th>
                <button onClick={() => filter("t")}>t</button>
              </th>
              <th>
                <button onClick={() => filter("u")}>u</button>
              </th>
              <th>
                <button onClick={() => filter("v")}>v</button>
              </th>
              <th>
                <button onClick={() => filter("w")}>w</button>
              </th>
              <th>
                <button onClick={() => filter("x")}>x</button>
              </th>
              <th>
                <button onClick={() => filter("y")}>y</button>
              </th>
              <th>
                <button onClick={() => filter("z")}>z</button>
              </th>
            </tr>
          </thead>
        </Table>
      </div>
    </div>
  );
};

export default SearchBar;
