import styled from "styled-components";

export const Footer = styled.footer`
  ${({ theme: { elevation } }) => elevation(0)};
  display: grid;
  grid-template-areas: "name spacer links";
  grid-area: footer;
  padding: 20px 5%;

  span {
    grid-area: name;
  }

  ul {
    ${({ theme: { flexin } }) => flexin(`flex-end`)}
    grid-area: links;

    li {
      &:not(:first-of-type) {
        margin-left: 15px;
      }
    }
  }
`;
