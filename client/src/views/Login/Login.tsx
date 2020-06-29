import React from "react";
import { useApi } from "Hook/useContext";

import { usePageMount } from "Hook/usePageMount";
import Form from "./components/Form";

import * as S from "./Login.style";

function Login(): JSX.Element {
  const { logIn } = useApi();
  const onSubmit: SubmitHandler = async ({ email, password }) => {
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
