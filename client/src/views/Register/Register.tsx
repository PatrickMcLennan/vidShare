import React from "react";

import { useApi } from "Hook/useContext";
import { usePageMount } from "Hook/usePageMount";
import Form from "./components/Form";

function Register(): JSX.Element {
  const { registerUser } = useApi();

  const onSubmit = async (values) => {
    console.log(values);
    try {
      await registerUser(values);
    } catch (error) {
      console.error(error);
    }
  };

  usePageMount(`Create an Account`);
  return <Form onSubmit={onSubmit} />;
}

export default Register;
