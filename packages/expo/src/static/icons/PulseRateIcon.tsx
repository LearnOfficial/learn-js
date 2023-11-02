import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const PulseRateIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 23 21"
    fill="none"
    {...props}
  >
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M21.781 10.199h-4l-3 9-6-18-3 9h-4"
    />
  </Svg>
);
export default PulseRateIcon;
