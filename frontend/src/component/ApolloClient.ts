import ApolloClient, { HttpLink } from 'apollo-boost';

const client = new ApolloClient({
    uri: 'https://rn-apollo-graphql-node.herokuapp.com/v1/graphql'
});

export default client