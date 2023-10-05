import { gql } from '@apollo/client';

export const QUERY_NOTES = gql`
  query {
    user {
      notes {
        id
        title
        path
        description
        subject {
          id
          title
          color
        }
      }
    }
  }
`;
