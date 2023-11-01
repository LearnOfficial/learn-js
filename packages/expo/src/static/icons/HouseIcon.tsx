import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const HouseIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.2.636A2.556 2.556 0 0 1 12 .003a2.556 2.556 0 0 1 1.801.633l9.262 8.047a2.764 2.764 0 0 1 .332 3.8 2.545 2.545 0 0 1-3.671.321l-.008-.007V18a6.001 6.001 0 0 1-5.195 5.946v-4.719a2.4 2.4 0 0 0-2.4-2.4h-.395a2.4 2.4 0 0 0-2.4 2.4v4.72A6.001 6.001 0 0 1 4.13 18v-5.078c-1.1.828-2.643.65-3.525-.439a2.764 2.764 0 0 1 .332-3.8L10.2.636Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default HouseIcon;
