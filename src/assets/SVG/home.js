import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Home({color}) {
  return (
    <Svg
      width={23}
      height={23}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M19.75 18.016v-6.172a3.666 3.666 0 00-1.141-2.658l-5.846-5.553a1.834 1.834 0 00-2.525 0L4.39 9.186a3.666 3.666 0 00-1.141 2.658v6.172a1.833 1.833 0 001.833 1.833h12.834a1.833 1.833 0 001.833-1.833z"
        stroke={color}
        strokeWidth={1.83333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Home;
