import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const BulletListIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      fill={props.color}
      stroke={props.color}
      strokeWidth={1.2}
      d="M2.4 3H6v3.6H2.4z"
    />
    <Path fill={props.color} d="M9 2.4h13.2v4.8H9z" />
    <Path stroke={props.color} strokeWidth={1.2} d="M2.4 10.2H6v3.6H2.4z" />
    <Path fill={props.color} d="M9 9.6h13.2v4.8H9z" />
    <Path stroke={props.color} strokeWidth={1.2} d="M2.4 17.4H6V21H2.4z" />
    <Path fill={props.color} d="M9 16.8h13.2v4.8H9z" />
  </Svg>
);
export default BulletListIcon;
