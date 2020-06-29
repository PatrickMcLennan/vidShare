/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { Router } from "react-router-dom";
import {
  render,
  cleanup,
  RenderResult,
  act,
  fireEvent,
} from "@testing-library/react";
import { createMemoryHistory } from "history";
import "jest-styled-components";

import { changeInput } from "Utility/testHelpers";

import { ThemeProvider } from "styled-components";
import { theme } from "Utility/resets.style";

import Form from "../components/Form";

afterEach(cleanup);

const onSubmit = jest.fn();

const { getByTestId }: RenderResult = render(
  <ThemeProvider theme={theme}>
    <Router history={createMemoryHistory()}>
      <Form onSubmit={onSubmit} />
    </Router>
  </ThemeProvider>
);

test("<Login Form />", async () => {
  const [
    form,
    firstNameInput,
    firstNameSup,
    lastNameInput,
    lastNameSup,
    emailInput,
    emailSup,
    passwordInput,
    passwordSup,
    confirmPasswordInput,
    confirmPasswordSup,
  ] = [
    getByTestId(`form`) as HTMLFormElement,
    getByTestId(`firstName_input`) as HTMLInputElement,
    getByTestId(`firstName_sup`) as HTMLElement,
    getByTestId(`lastName_input`) as HTMLInputElement,
    getByTestId(`lastName_sup`) as HTMLElement,
    getByTestId(`email_input`) as HTMLInputElement,
    getByTestId(`email_sup`) as HTMLElement,
    getByTestId(`password_input`) as HTMLInputElement,
    getByTestId(`password_sup`) as HTMLElement,
    getByTestId(`confirmPassword_input`) as HTMLInputElement,
    getByTestId(`confirmPassword_sup`) as HTMLElement,
  ];
  const inputs: HTMLInputElement[] = [
    firstNameInput,
    lastNameInput,
    emailInput,
    passwordInput,
    confirmPasswordInput,
  ];

  // // Form Starts with empty values
  inputs.forEach((input): void => expect(input.value).toBe(``));

  // Form will not submit with an empty field
  inputs.slice(0, -1).forEach((input) => changeInput(input, `test`));
  await act(async () => {
    await fireEvent.submit(form);
  });
  expect(onSubmit).toBeCalledTimes(0);
  expect(confirmPasswordInput.value).toBe(``);

  // Passwords must match
  changeInput(confirmPasswordInput, `notTesting`);
  await act(async () => {
    await fireEvent.submit(form);
  });
  expect(onSubmit).toBeCalledTimes(0);

  // Full fields, passwords match, form submits values Once
  changeInput(confirmPasswordInput, `test`);
  await act(async () => {
    await fireEvent.submit(form);
  });
  expect(onSubmit).toBeCalledTimes(1);
});
