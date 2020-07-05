import styled from "styled-components";
import AsyncSelect from "react-select/async";

export const LeftSidebar = styled.section`
  ${({ theme: { leftSidebar } }) => leftSidebar()};
  ${({ theme: { flexin } }) => flexin(`center`, `center`, `column`)};
`;

export const MainColumn = styled.section`
  ${({ theme: { mainColumn } }) => mainColumn()}
`;

export const RightColumn = styled.section`
  ${({ theme: { rightColumn } }) => rightColumn()}
`;

export const Search = styled(AsyncSelect)`
  margin-top: 40px;
`;

export const Results = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-gap: 10px;
  margin-top: 25px;
`;
