import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const LeftArrowIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={3}
      d="m10.75 5-7 7M3.75 12h18M3.75 12l7 7"
    />
  </Svg>
);
export default LeftArrowIcon;
