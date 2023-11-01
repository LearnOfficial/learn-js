import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const AddIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.4 1.5A1.5 1.5 0 0 0 12.9 0h-1.8a1.5 1.5 0 0 0-1.5 1.5v6.6a1.5 1.5 0 0 1-1.5 1.5H1.5A1.5 1.5 0 0 0 0 11.1v1.8a1.5 1.5 0 0 0 1.5 1.5h6.6a1.5 1.5 0 0 1 1.5 1.5v6.6a1.5 1.5 0 0 0 1.5 1.5h1.8a1.5 1.5 0 0 0 1.5-1.5v-6.6a1.5 1.5 0 0 1 1.5-1.5h6.6a1.5 1.5 0 0 0 1.5-1.5v-1.8a1.5 1.5 0 0 0-1.5-1.5h-6.6a1.5 1.5 0 0 1-1.5-1.5V1.5Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default AddIcon;
