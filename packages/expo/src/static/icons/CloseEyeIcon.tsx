import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const CloseEyeIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
    viewBox="0 0 14 10"
  >
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.569 4.138A15.541 15.541 0 0 1 14 7s-3.134 4-7 4c-.682 0-1.34-.124-1.964-.33l.875-.874a3 3 0 0 0 3.886-3.885l1.772-1.773ZM8.98 6.726a2 2 0 0 1-2.256 2.256l2.256-2.256Zm-2.62-1.622L5.103 6.36c.2-.59.667-1.057 1.256-1.256Zm-2.33 2.33A3 3 0 0 1 7.433 4.03l1.594-1.593C8.385 2.166 7.705 2 7 2 3.134 2 0 7 0 7s.88 1.124 2.284 2.18l1.747-1.746Z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={2}
      d="m12.293 1.293-10 10"
    />
  </Svg>
);
export default CloseEyeIcon;
