import React from "react";
import styled from "styled-components";

const ShadowCircle = styled.div`
  position: absolute;
  left: 200px;
  top: 100px;
  width: 300px;
  height: 300px;

  z-index: 9;
  border-radius: 50%;
  box-shadow: inset hsla(29, 100%, 76%, 0.7) 0 0 600px,
    inset hsla(29, 100%, 76%, 0.7) 0 0 600px,
    inset hsla(29, 100%, 76%, 0.7) 0 0 600px,
    hsla(29, 100%, 76%, 0.85) 0 0 500px 100px,
    inset hsla(29, 100%, 76%, 0.7) 0 0 600px,
    hsla(29, 100%, 76%, 0.85) 0 0 500px 100px,
    inset hsla(29, 100%, 76%, 0.7) 0 0 600px,
    hsla(29, 100%, 76%, 0.85) 0 0 500px 100px;
`;

function RoundShadow({ positions }) {
  return <ShadowCircle style={{ ...positions }}></ShadowCircle>;
}

export default RoundShadow;
