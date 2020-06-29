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
  const [form, emailInput, emailSup, passwordInput, passwordSup] = [
    getByTestId(`form`) as HTMLFormElement,
    getByTestId(`email_input`) as HTMLInputElement,
    getByTestId(`email_sup`) as HTMLElement,
    getByTestId(`password_input`) as HTMLInputElement,
    getByTestId(`password_sup`) as HTMLElement,
  ];

  // Form Starts with empty values
  [emailInput, passwordInput].forEach((input): void =>
    expect(input.value).toBe(``)
  );

  // Form will not submit with empty fields
  changeInput(emailInput, `testing`);
  await act(async () => {
    await fireEvent.submit(form);
  });
  expect(onSubmit).toBeCalledTimes(0);

  changeInput(emailInput, ``);
  changeInput(passwordInput, `testing`);
  await act(async () => {
    await fireEvent.submit(form);
  });
  expect(onSubmit).toBeCalledTimes(0);

  // Form submits only once when fields are filled out properly
  changeInput(emailInput, `testing@email.com`);
  await act(async () => {
    await fireEvent.submit(form);
  });
  expect(emailInput.value).toBe(`testing@email.com`);
  expect(passwordInput.value).toBe(`testing`);
  expect(onSubmit).toBeCalledTimes(1);
});
