import styled, { css } from "styled-components";

export const Button = styled.button<{ viewMode: string }>`
  ${({ viewMode }) => {
    switch (viewMode) {
      case `MAIN`:
      default:
        return css`
          display: grid;
          grid-template-areas:
            "title title authorName"
            "description description description"
            "nothing nothing svg";
          padding: 10px;
          background: none;
          border: 1px solid #c9c9c9;
          border-radius: 3px;
          cursor: pointer;
          text-align: left;

          .title {
            ${({ theme: { fontLine } }) => fontLine(`20px`)}
            grid-area: title;
            grid-column-span: 2;
          }

          .description {
            grid-area: description;
          }

          .svg {
            grid-area: svg;
            justify-self: end;
            height: 50px;
            width: 50px;
          }
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
