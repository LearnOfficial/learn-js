import { gql } from '@apollo/client';

export const QUERY_SUBJECTS = gql`
  query {
    user {
      subjects {
        id
        title
        color
      }
    }
  }
`;
