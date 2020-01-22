import React, { Component } from "react";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import  Categories  from "./Categories/Categories";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const localGraphQL = "http://localhost:4000/graphql";

const client = new ApolloClient({
  uri: localGraphQL
});

class Main extends Component {
  getCategory = (data) =>{
    console.log(data)
  }
  render() {
    return (
        <ApolloProvider client={client}>
        <Container>
          <Jumbotron>
          <h1 className="header"><span className="emoji-size">&#129315;</span> Chuck Norris Jokes <span className="emoji-size">&#129315;</span></h1>
          <h2 className="header">Whats Your Flavour? </h2>
          <Categories />
          </Jumbotron>
          
        </Container>
        
            
        
     </ApolloProvider>
    );
  }
}
 
export default Main;