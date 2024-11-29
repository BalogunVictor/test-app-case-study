import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgComponent = props => (
  <Svg
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M1.96284 8.41521L11.504 1.54306L21.0451 8.41521V19.2143C21.0451 19.735 20.8218 20.2345 20.4241 20.6027C20.0265 20.9709 19.4872 21.1778 18.9249 21.1778H4.0831C3.52077 21.1778 2.98148 20.9709 2.58385 20.6027C2.18623 20.2345 1.96284 19.735 1.96284 19.2143V8.41521Z"
      stroke={props.color}
      stroke-opacity="0.56"
      stroke-width="1.96347"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
export default SvgComponent;
