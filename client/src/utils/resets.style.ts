import {
  createGlobalStyle,
  DefaultTheme,
  css,
  GlobalStyleComponent,
  FlattenSimpleInterpolation,
} from "styled-components";

export const GlobalStyle: GlobalStyleComponent<
  Record<string, any>,
  DefaultTheme
> = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }

  #ROOT {
    min-height: 100vh;
    overflow-x: hidden;
    display: grid;
    grid-template-areas:
      "nav"
      "main"
      "footer";
    grid-template-rows: max-content 1fr max-content;
  }

  main {
    display: grid;
    grid-row: 2;
    grid-template-areas:
      "left-sidebar main-column";
    grid-template-columns: minmax(20%, max-content) 1fr;
  }

  ul,
  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
`;

export const theme = {
  /* Layout */
  flexin: (
    jc: string = `center`,
    ai: string = `center`,
    fd: string = `row`,
    wrap: string = `nowrap`
  ): FlattenSimpleInterpolation => css`
    display: flex;
    justify-content: ${jc};
    align-items: ${ai};
    flex-direction: ${fd};
    flex-wrap: ${wrap};
  `,

  remove: css`
    display: none;
    line-height: 0;
    visibility: hidden;
  `,

  divider: css`
    display: block;
    height: 2px;
    width: 75%;
    background-color: #e3e3e3;
    margin: 15px auto;
  `,

  leftSidebar: (): FlattenSimpleInterpolation => css`
    grid-area: left-sidebar;
  `,

  mainColumn: (): FlattenSimpleInterpolation => css`
    grid-area: main-column;
  `,

  /* Typography */
  fontLine: (
    fontSize: string,
    lineHeight?: string
  ): FlattenSimpleInterpolation => css`
    font-size: ${fontSize};
    line-height: ${lineHeight ?? fontSize};
  `,

  /* - Buttons - */
  blueButton: (): FlattenSimpleInterpolation => css`
    padding: 10px 20px;
    text-transform: uppercase;
    text-shadow: 1px 1px 1px black;
    background-color: #0bb5ff;
    border-radius: 3px;
    border: none;
    color: white;
    text-align: center;
  `,

  secondaryLink: (): FlattenSimpleInterpolation => css`
    padding: 10px 20px;
    text-transform: uppercase;
    background-color: #7f8c8d;
    border-radius: 3px;
    border: none;
    color: white;
    text-align: center;
  `,

  submitButton: (): FlattenSimpleInterpolation => css`
    padding: 10px 20px;
    background-color: #2ecc71;
    border: none;
    border-radius: 3px;
    color: white;
    cursor: pointer;
    text-align: center;
    text-transform: uppercase;
  `,

  /* - Shadows */
  elevation: (weight: number): FlattenSimpleInterpolation => {
    switch (weight) {
      case 0:
      default:
        return css`
          box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.25);
        `;
    }
  },

  /* - Forms - */
  standardInput: (): FlattenSimpleInterpolation => css`
    padding: 8px 12px;
    border-radius: 3px;
    border: 1px solid #7f8c8d;

    &::placeholder {
      color: #7f8c8d;
      font-style: italic;
    }
  `,

  /* - Colors - */
  errorRed: `#c0392b`,
};
