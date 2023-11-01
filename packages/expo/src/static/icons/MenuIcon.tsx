import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const MenuIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 25"
    fill="none"
    {...props}
  >
    <Path
      fill={props.color}
      d="M4.5 7.5h15v2h-15zM4.5 11.5h15v2h-15zM4.5 15.5h15v2h-15z"
    />
  </Svg>
);
export default MenuIcon;
