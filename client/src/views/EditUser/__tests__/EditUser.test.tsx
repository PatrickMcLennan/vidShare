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

import { User } from "src/types/users/user.model";
import Form from "../components/Form";

afterEach(cleanup);

const onSubmit = jest.fn();
const testUser: User = {
  firstName: `testFirst`,
  lastName: `testLast`,
  email: `test@test.com`,
};

const { getByTestId }: RenderResult = render(
  <ThemeProvider theme={theme}>
    <Router history={createMemoryHistory()}>
      <Form onSubmit={onSubmit} user={testUser} />
    </Router>
  </ThemeProvider>
);

test("<EditUser Form />", async () => {
  const [
    form,
    firstNameInput,
    firstNameSup,
    lastNameInput,
    lastNameSup,
    emailInput,
  ] = [
    getByTestId(`form`) as HTMLFormElement,
    getByTestId(`firstName_input`) as HTMLInputElement,
    getByTestId(`firstName_sup`) as HTMLElement,
    getByTestId(`lastName_input`) as HTMLInputElement,
    getByTestId(`lastName_sup`) as HTMLElement,
    getByTestId(`email_input`) as HTMLInputElement,
    getByTestId(`email_sup`) as HTMLElement,
  ];
  const inputs: HTMLInputElement[] = [
    firstNameInput,
    lastNameInput,
    emailInput,
  ];

  // Form Starts with correct default values
  expect(firstNameInput.value).toBe(`testFirst`);
  expect(lastNameInput.value).toBe(`testLast`);
  expect(emailInput.value).toBe(`test@test.com`);

  // Form will not submit with an empty field
  inputs.forEach(
    async (input: HTMLInputElement): Promise<void> => {
      const { value } = input;
      changeInput(input, ``);
      await act(async () => {
        await fireEvent.submit(form);
      });
      expect(onSubmit).toBeCalledTimes(0);
      return changeInput(input, value);
    }
  );
});
