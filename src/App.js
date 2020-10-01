import React from 'react';

import { ApolloClient, InMemoryCache,  ApolloProvider, gql } from '@apollo/client';
import Products from './components/Products'; 

const client = new ApolloClient({
  uri: 'https://goa-fish-market-test.myshopify.com/admin/api/2020-07/graphql.json',
  cache: new InMemoryCache(),
  headers: {
    "Content-Type": "application/json",
    "X-Shopify-Access-Token": "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"
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
      </div>
    </ApolloProvider>
  );
}

export default App;
