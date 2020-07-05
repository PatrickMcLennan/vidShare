import styled from "styled-components";
import AsyncCreatableSelect from "react-select/async-creatable";

export const LeftSidebar = styled.section`
  ${({ theme: { leftSidebar } }) => leftSidebar()};
  ${({ theme: { flexin } }) => flexin(`flex-start`, `flex-end`, `column`)};
`;

export const MainColumn = styled.section`
  ${({ theme: { mainColumn } }) => mainColumn()};
  padding: 50px;
`;

export const Search = styled(AsyncCreatableSelect)`
  /* margin-top: 40px; */
`;

export const Results = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-gap: 10px;
  margin-top: 25px;
`;
