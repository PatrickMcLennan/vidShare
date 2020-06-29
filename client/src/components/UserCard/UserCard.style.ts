import styled, { css } from "styled-components";

export const Article = styled.article<{ viewMode: ViewMode }>`
  display: grid;

  ${({ viewMode }) => {
    switch (viewMode) {
      case "LEFT_SIDEBAR":
      default:
        return css`
          grid-template-areas:
            "name"
            "videos"
            "savedVideos";
          grid-template-rows: repeat(max-content, 3);
          padding-top: 15px;
          padding-right: 15px;
          text-align: right;

          .name {
            text-align: center;
            text-transform: uppercase;
          }
        `;
      case `MAIN`:
        return css`
          ${({ theme: { elevation } }) => elevation(0)};
          grid-template-areas:
            "name"
            "videos"
            "savedVideos";
          grid-template-rows: repeat(max-content, 3);
          grid-area: main-column;
          margin: auto 0;
          border: 1px solid #e3e3e3;

          .name {
            pointer-events: none;
          }
        `;
    }
  }}

  .name {
    ${({ theme: { fontLine } }) => fontLine(`18px`, `22px`)};
    grid-area: name;
    text-align: center;
  }

  .videos {
    ${({ theme: { fontLine } }) => fontLine(`16px`, `20px`)};
    grid-area: videos;
  }

  .savedVideos {
    ${({ theme: { fontLine } }) => fontLine(`16px`, `20px`)};
    grid-area: savedVideos;
  }
`;
