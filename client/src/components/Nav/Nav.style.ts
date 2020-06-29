import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  ${({ theme: { elevation } }) => elevation(0)};
  display: grid;
  grid-area: nav;
  grid-template-areas: "logo spacer menu";
  grid-template-columns: auto 1fr auto;
  padding: 20px 5%;
  border-bottom: 1px solid #e3e3e3;
`;

export const H3 = styled.h3`
  ${({ theme: { fontLine } }) => fontLine(`30px`, `50px`)};
  grid-area: logo;
`;

export const Menu = styled.ul`
  ${({ theme: { flexin } }) => flexin(`flex-start`)};
  grid-area: menu;
  align-content: center;

  li:not(:last-of-type) {
    margin-right: 15px;
  }
`;

export const MenuLink = styled(Link)`
  ${({ theme: { blueButton } }) => blueButton()}
`;
