import styled, { css } from "styled-components";

export const Button = styled.button<{ viewMode: string }>`
  ${({ viewMode }) => {
    switch (viewMode) {
      case `MAIN`:
      default:
        return css`
          background: none;
          border: 1px solid #c9c9c9;
          border-radius: 3px;
          cursor: pointer;
          text-align: left;
        `;
    }
  }}
`;

// <div>
//   Icons made by{" "}
//   <a
//     href="https://www.flaticon.com/authors/pixel-perfect"
//     title="Pixel perfect"
//   >
//     Pixel perfect
//   </a>{" "}
//   from{" "}
//   <a href="https://www.flaticon.com/" title="Flaticon">
//     www.flaticon.com
//   </a>
// </div>;
