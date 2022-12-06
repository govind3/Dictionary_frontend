import React,{useEffect} from 'react'
import { Container, Row,Button } from 'react-bootstrap';
import "./HomePage.css"
const HomePage = ({history}) => {

  useEffect(() => {
    const userInfo =localStorage.getItem("userInfo")

    if (userInfo) {
      history.push("/mywords");
    }
  }, [history]);

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h2 className="title">Welcome</h2>
              <p className="subtitle" style={{color:'black'}}>Best Place for Dictionary</p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button size='lg' className='homebutton'>Login</Button>
              </a>
              <a href="/register">
                <Button size='lg' className='homebutton' variant='success'>Signup</Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default HomePage;