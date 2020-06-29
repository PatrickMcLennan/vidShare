import { act, Simulate } from "react-dom/test-utils";
import { fireEvent } from "@testing-library/react";

export const changeInput: Function = (element: HTMLElement, value: string) => {
  return fireEvent.change(element, { target: { value } });
};

export const fakeSubmit: Function = async (form: HTMLElement) => {
  return act(async () => {
    Simulate.submit(form);
  });
};
