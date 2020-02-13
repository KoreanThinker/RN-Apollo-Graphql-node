import { gql } from "apollo-boost";

export const GET_HELLO = gql`
    query hello($name: String) {
        hello(name: $name)
    }
`


export const GET_PROFILE = gql`
    query profileOrderByName($limit: Int) {
        profile_aggregate(limit: $limit, order_by: {id:desc}) {
            nodes {
                id
                name
                password
            }
        }
    }
`