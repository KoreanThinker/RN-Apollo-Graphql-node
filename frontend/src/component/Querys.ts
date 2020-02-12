import { gql } from "apollo-boost";

export const GET_HELLO = gql`
    query hello($name: String) {
        hello(name: $name)
    }
`