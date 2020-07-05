import React from "react";
import { useApi } from "Hook/useContext";

import { usePageMount } from "Hook/usePageMount";
import { ApiError } from "src/types/client/api-error.interface";
import Form from "./components/Form";

import * as S from "./Login.style";

function Login(): JSX.Element {
  const { logIn } = useApi();

  const onSubmit: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<void | ApiError> = async ({ email, password }) => {
    try {
      await logIn(true, { email, password });
    } catch (error) {
      console.error(error);
    }
  };

  usePageMount(`Log In`);

  return (
    <>
      <S.H1>Log In</S.H1>
      <Form onSubmit={onSubmit} />
    </>
  );
}

export default Login;
