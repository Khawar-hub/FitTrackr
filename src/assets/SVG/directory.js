import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function Directory({color}) {
  return (
    <Svg
      width={23}
      height={23}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#clip0_49_49)" stroke={color} strokeWidth={1.83333}>
        <Path
          d="M15.826 18.705l-.587-4.697a2.75 2.75 0 00-2.73-2.409h-2.02a2.75 2.75 0 00-2.728 2.41l-.588 4.696a1.833 1.833 0 001.82 2.06h5.013a1.834 1.834 0 001.82-2.06v0z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M11.5 7.932a2.75 2.75 0 100-5.5 2.75 2.75 0 000 5.5zM4.167 10.682a1.833 1.833 0 100-3.666 1.833 1.833 0 000 3.666zM18.833 10.682a1.833 1.833 0 100-3.666 1.833 1.833 0 000 3.666z" />
        <Path
          d="M4.167 13.432h-.28a1.834 1.834 0 00-1.81 1.532l-.304 1.833a1.834 1.834 0 001.808 2.135h3.336m11.917-5.5h.28a1.833 1.833 0 011.809 1.532l.305 1.833a1.834 1.834 0 01-1.809 2.135h-3.335"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_49_49">
          <Path fill="#fff" transform="translate(.5 .6)" d="M0 0H22V22H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Directory;
