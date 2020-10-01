import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, Query} from 'react-apollo';
import gql from 'graphql-tag';

import Products from './components/Products';
import CollapsibleTable from './components/CollapsibleTable';


const client = new ApolloClient({
  uri: 'https://goa-fish-market-test.myshopify.com/api/graphql',
  headers: {
      'X-Shopify-Storefront-Access-Token': '0a9472669e95584e889c4fc63f252f7c'
  }
});



function App() {
  client
  .query({
    query: gql`
          query {products(first:5) { edges { node { title } } } }
    `
  })
  .then(result => console.log(result));

  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Products</h1>
        <Products/>
        {/* <CollapsibleTable/> */}
      </div>
    </ApolloProvider>
  );
}

export default App;
