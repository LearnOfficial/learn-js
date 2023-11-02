import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const CheckIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 27 22"
    fill="none"
    {...props}
  >
    <Path
      fill={props.color}
      d="M21.728 1.652a1.5 1.5 0 0 1 2.121 0l1.427 1.427a1.5 1.5 0 0 1 0 2.121l-14.85 14.85a1.5 1.5 0 0 1-2.12 0l-1.427-1.427a1.5 1.5 0 0 1 0-2.122L21.728 1.652Z"
    />
    <Path
      fill={props.color}
      d="M5.494 10.946a1.5 1.5 0 0 0-2.121 0l-1.427 1.427a1.5 1.5 0 0 0 0 2.121l5.964 5.964a1.5 1.5 0 0 0 2.121 0l1.427-1.427a1.5 1.5 0 0 0 0-2.121l-5.964-5.964Z"
    />
  </Svg>
);
export default CheckIcon;
