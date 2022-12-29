import { gql } from "@apollo/client";

export const GET_TRANSACTIONS = gql`
             query TestTransactions($orderBy: String!){
                 transactions(first:1000 orderBy: $orderBy){
                     id,
                     gasUsed,
                     timestamp
                 }
             }
`;

export const SEARCH_TRANSACTIONS = gql`
             query TestTransactions($orderBy: String! $hash: String!){
                 transactions(first:1000 orderBy: $orderBy where: {id: $hash}){
                     id,
                     gasUsed,
                     timestamp
                 }
             }
`;

export const GET_TRANSACTION = gql`
             query MyQuery($id: String!) {
                 transaction(id: $id){
                     id
                     gasPrice
                     gasUsed
                     timestamp
                 }
             }
`;