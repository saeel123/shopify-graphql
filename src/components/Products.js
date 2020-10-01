import React, { Component } from 'react';
import { gql, Query } from '@apollo/client';

const TEST_QUERY = gql`
    query {products(first:5) { edges { node { title } } } }
`;

export class Products extends Component {
    render() {
        return (
            <div>
                <Query query={TEST_QUERY}>
                    {
                        ({ loading, error, data}) => {
                            console.log(data);
                            return <h1> test </h1>
                        }
                    }
                </Query>
            </div>
        )
    }
}

export default Products
