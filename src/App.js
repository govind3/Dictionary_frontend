import React from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './screens/HomePage/HomePage';
import {Route, BrowserRouter} from "react-router-dom"
import MyWords from './screens/MyWords/MyWords';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import CreateWord from "./screens/CreateWord/CreateWord";
import SingleWord from "./screens/SingleWord/SingleWord"
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen"

const App = () => {

  return (
    <div className="container" style={{marginTop:"15px"}}>
      <BrowserRouter>
      <Header />
      <hr style={{height:'2px',backgroundColor:'olive'}} />
        <main>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/addword" component={CreateWord} />
          <Route path="/word/:id" component={SingleWord} />
          <Route path="/mywords" component={()=> <MyWords />} />
        </main>
      <Footer />
    </BrowserRouter>
    </div>

  )
}

export default App;