import styled from "styled-components";

export const LeftSidebar = styled.section`
  ${({ theme: { leftSidebar } }) => leftSidebar()};
  ${({ theme: { flexin } }) => flexin(`center`, `center`, `column`)};
`;

export const MainColumn = styled.section`
  ${({ theme: { mainColumn } }) => mainColumn()}
`;

export const RightColumn = styled.section`
  ${({ theme: { rightColumn } }) => rightColumn()}
  background-color: red;
`;
