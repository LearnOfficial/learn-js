import {
  LazyQueryHookOptions,
  MutationFunctionOptions,
  NoInfer,
  OperationVariables,
  gql
} from '@apollo/client';
import { IUserSignUpInput } from '@learn/common/schemas/user';

export const SIGN_UP_MUTATION = gql`
  mutation signUp($userSignUpInput: IUserSignUpInput!) {
    signUp(userSignUpInput: $userSignUpInput) {
      token
    }
  }
`;

export function parseSignUpOptions(
  userSignUpInput: IUserSignUpInput
): MutationFunctionOptions<NoInfer<any>, NoInfer<OperationVariables>> {
  return {
    variables: {
      userSignUpInput: userSignUpInput
    }
  };
}
