import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    {...props}>
    <Path
      fill="#FF0004"
      d="M7.5 11.042c.2 0 .369-.068.505-.204a.685.685 0 0 0 .203-.505c0-.2-.068-.369-.203-.504a.685.685 0 0 0-.505-.204c-.2 0-.369.068-.505.204a.685.685 0 0 0-.203.504c0 .201.068.37.203.505a.686.686 0 0 0 .505.204Zm-.708-2.834h1.416v-4.25H6.792v4.25Zm.708 6.375c-.98 0-1.9-.186-2.763-.558a7.154 7.154 0 0 1-2.248-1.514 7.153 7.153 0 0 1-1.515-2.248A6.898 6.898 0 0 1 .417 7.5c0-.98.186-1.9.557-2.763A7.153 7.153 0 0 1 2.49 2.49 7.153 7.153 0 0 1 4.737.974 6.897 6.897 0 0 1 7.5.417c.98 0 1.9.186 2.762.557a7.153 7.153 0 0 1 2.25 1.515 7.153 7.153 0 0 1 1.513 2.248c.372.862.558 1.783.558 2.763s-.186 1.9-.558 2.762a7.153 7.153 0 0 1-1.514 2.25 7.154 7.154 0 0 1-2.248 1.513 6.897 6.897 0 0 1-2.763.558Zm0-1.416c1.582 0 2.922-.55 4.02-1.647 1.098-1.098 1.647-2.438 1.647-4.02 0-1.582-.55-2.922-1.647-4.02-1.098-1.098-2.438-1.647-4.02-1.647-1.582 0-2.922.55-4.02 1.647C2.382 4.578 1.833 5.918 1.833 7.5c0 1.582.55 2.922 1.647 4.02 1.098 1.098 2.438 1.647 4.02 1.647Z"
    />
  </Svg>
);
export default SvgComponent;
