import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./Colors";

const spin = keyframes`
to { 
  transform: rotate(360deg)
}


`;

const Navbar = () => {
  const [padding] = useState(15);
  return (
    <header
      css={css`
        background-color: ${colors.secondary};
        padding: ${padding}px;
      `}
    >
      <Link to="/">Adopt me !</Link>
      <span
        css={css`
          font-size: 60px;
          &:hover {
            text-decoration: underline;
            animation: 1s ${spin} linear infinite;
          }
          display: inline-block;
        `}
        role="img"
        aria-label="logo"
      >
        🐶
      </span>
    </header>
  );
};

export default Navbar;
