import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const RightArrowIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={3}
      d="m13 1.5 7 7M20 8.5H2M20 8.5l-7 7"
    />
  </Svg>
);
export default RightArrowIcon;
