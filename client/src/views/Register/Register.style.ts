import styled, { css } from "styled-components";
import { FieldError } from "react-hook-form";

export const Form = styled.form`
  ${({ theme: { elevation } }) => elevation(0)}
  display: grid;
  grid-template-areas:
    "header header"
    "please please"
    "firstName lastName"
    "email email"
    "password confirmPassword"
    "submit submit";
  column-gap: 15px;
  margin: auto 17.5vw;
  grid-column: 1 / -1;
  padding: 45px 30px;
  border: 1px solid #e3e3e3;
  border-radius: 3px;

  .firstName {
    grid-area: firstName;
  }
  .lastName {
    grid-area: lastName;
  }
  .email {
    grid-area: email;
  }
  .password {
    grid-area: password;
  }
  .confirmPassword {
    grid-area: confirmPassword;
  }
`;

export const H1 = styled.h1`
  ${({ theme: { remove } }) => remove};
`;

export const H6 = styled.h1`
  ${({ theme: { fontLine } }) => fontLine(`46px`)};
  grid-area: header;
  font-weight: 400;
  margin-bottom: 25px;
  text-align: center;
  transition: all 0.2s ease-out;
`;

export const Label = styled.label<{ error: FieldError }>`
  ${({ theme: { flexin } }) => flexin(`flex-start`, `flex-start`, `column`)};
  align-self: stretch;

  &:not(:last-of-type) {
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
export const TopSpan = styled.span`
  ${({ theme: { fontLine } }) => fontLine(`14px`)};
  grid-area: please;
  margin-bottom: 20px;
  opacity: 0.5;
  font-style: italic;
  text-align: center;
`;

export const Submit = styled.input`
  ${({ theme: { submitButton } }) => submitButton()};
  ${({ theme: { fontLine } }) => fontLine(`18px`)};
  grid-area: submit;
  width: 50%;
  margin: 40px auto 0 auto;
`;

export const Divider = styled.div`
  ${({ theme: { divider } }) => divider};
  width: 25%;
`;
