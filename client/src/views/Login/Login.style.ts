import styled, { css } from "styled-components";

import { Link } from "react-router-dom";
import { FieldError } from "react-hook-form";

export const Form = styled.form`
  ${({ theme: { flexin } }) => flexin(`center`, `center`, `column`)};
  ${({ theme: { elevation } }) => elevation(0)}
  margin: auto 0;
  grid-column-start: 2;
  padding: 45px 30px;
  border: 1px solid #e3e3e3;
  border-radius: 3px;
`;

export const H1 = styled.h1`
  ${({ theme: { remove } }) => remove};
`;

export const H6 = styled.h1`
  ${({ theme: { fontLine } }) => fontLine(`46px`)};
  font-weight: 400;
  margin-bottom: 25px;
  transition: all 0.2s ease-out;
`;

export const Label = styled.label<{ error: FieldError }>`
  ${({ theme: { flexin } }) => flexin(`flex-start`, `flex-start`, `column`)};
  align-self: stretch;

  &:first-of-type {
    margin-bottom: 20px;
  }

  span {
    ${({ theme: { flexin } }) => flexin(`flex-start`, `flex-start`)};
    ${({ theme: { fontLine } }) => fontLine(`18px`, `22px`)};
    margin-bottom: 5px;
  }

  sup {
    ${({ error, theme: { errorRed } }) =>
      error &&
      css`
        color: ${errorRed};
      `}
    margin-left: 3.5px;
  }

  input {
    ${({ theme: { standardInput } }) => standardInput()};
    ${({ theme: { fontLine } }) => fontLine(`18px`, `22px`)};
    width: 100%;
  }
`;

export const Submit = styled.input`
  ${({ theme: { submitButton } }) => submitButton()};
  ${({ theme: { fontLine } }) => fontLine(`18px`)};
  width: 50%;
  margin-top: 40px;
`;

export const Divider = styled.div`
  ${({ theme: { divider } }) => divider};
  width: 25%;
`;

export const RegisterLink = styled(Link)`
  ${({ theme: { secondaryLink } }) => secondaryLink()}
  ${({ theme: { fontLine } }) => fontLine(`18px`)};
  width: 50%;
`;
