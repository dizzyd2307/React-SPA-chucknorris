import React, { Component } from 'react'
import Joke from './Joke/Joke';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ListGroup from 'react-bootstrap/ListGroup';


const getCategories = gql`{
    categories
}`;

class Categories extends Component {

  constructor(props){
    super(props);
    this.state={
      // category: categorySelect
      category: "",
      show: false
    }
  }

   alertClicked(category) {
    this.setState({category: category});
      this.setState({show: true});

   }

render(){
  const CategoriesList = () =>(
    <Query query={getCategories}>
        {({ loading, error, data }) => {
        if (loading) return <p>Loading…</p>;
        if (error) return <p>Error :(</p>;
            // return <p>{data.categories}</p>
            return data.categories.map( categories => (
    <div className="header width-50" key={categories}>
      <ListGroup variant="flush">
        <ListGroup.Item className="border" action onClick={() => this.alertClicked(categories)}>{categories}</ListGroup.Item>
      </ListGroup>
    </div>
   )
   );
   
  }}
    </Query>
)
  return(
    <div>
    <CategoriesList/>
        {this.state.show && <Joke category={this.state.category} />}
    </div>
  )
  
}
}



export default Categories