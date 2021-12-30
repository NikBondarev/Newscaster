import React from "react";
import {Route, Switch} from 'react-router-dom';
import './App.css';
import FrontPageNews from "./Components/FrontPageNews/FrontPageNews";
import News from "./Components/PostPage/PostPage";
import Header from "./Components/Header/Header";
import NewsPage from "./Components/NewsPage/NewsPage";
import Footer from "./Components/Footer/Footer";
import Contacts from "./Components/Contacts/Contacts";



function App() {
  return (
    <div className="App">
       <div className="container">
            <Header/>
            <Switch>
              <Route
                path="/"
                exact
                component={FrontPageNews}
              />
              <Route 
                path = "/NewsPage"
                exact
                component={NewsPage}
              />
              <Route
                path = "/NewsPage/:title"
                exact
                component={News}
              />  
              <Route 
                path= "/Contacts"
                exact
                component={Contacts}
              />
          </Switch> 
          <Footer/>
        </div>
     
    </div>
  );
  
}

export default App;
