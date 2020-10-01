import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ProductItem from './ProductItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const TEST_QUERY = gql`
    query {products(first:5) { edges { node { title, productType, publishedAt  } } } }
`;

export class Products extends Component {
    render() {
        return (
            <div>
                <Query query={TEST_QUERY}>
                    {({ loading, error, data }) => {
                        if (loading) return <h4>Loading...</h4>;
                        if (error) console.log(error);

                        return (
                        <Fragment>
                            {/* {data.products.edges.map(product => (
                                <ProductItem product={product.node}/>
                            ))} */}

                            <TableContainer component={Paper}>
                                <Table  aria-label="simple table">
                                    <TableHead>
                                    <TableRow>
                                        <TableCell>Title</TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {data.products.edges.map(product => (
                                            <TableRow key={product.name}>
                                                <TableCell >{product.node.title}</TableCell>
                                                <TableCell >{product.node.productType}</TableCell>
                                                <TableCell >{product.node.publishedAt}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Fragment>
                        );
                    }}
                    </Query>
            </div>
        )
    }
}

export default Products
