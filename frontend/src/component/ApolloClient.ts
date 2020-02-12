import ApolloClient, { HttpLink } from 'apollo-boost';

const client = new ApolloClient({
    uri: 'http://192.168.35.227:4000'
});

export default client