import React from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import PopUpModal from './Joke_Modal/popUpModal';

const getJoke = gql`
query Joke($category: ID!){
        joke(category: $category){
            value
            icon_url
        }
    }
`;
   
const Joke = (props) => (

    <Query query={getJoke}
    variables={{category: props.category}}
    fetchPolicy="no-cache">
        {({ loading, error, data}) =>{
            if (loading) return <p></p>;
            if (error) return `Error! ${props}`;
        return(

  <PopUpModal joke={data.joke}/>
  
);
        }}
        
    </Query>
    
)

export default Joke;