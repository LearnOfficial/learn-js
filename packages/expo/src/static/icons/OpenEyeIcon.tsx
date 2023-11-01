import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
const OpenEyeIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
    viewBox="0 0 14 10"
  >
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7 9c3.866 0 7-4 7-4s-3.134-5-7-5-7 5-7 5 3.134 4 7 4Zm0-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      clipRule="evenodd"
    />
    <Circle cx={7} cy={5} r={2} fill={props.color} />
  </Svg>
);
export default OpenEyeIcon;
