import React from "react";
import { useParams, Redirect } from "react-router-dom";

import { useUser, useApi } from "Hook/useContext";

import Form from "./components/Form";

function EditUser(): JSX.Element {
  const { user } = useUser();
  const { editUser } = useApi();
  const { id } = useParams();
  if (id !== user.id) return <Redirect to="/" />;

  const onSubmit = async (values) => {
    console.log(values);
    try {
      await editUser(values);
    } catch (error) {
      console.error(error);
    }
  };

  return <Form onSubmit={onSubmit} user={user} />;
}

export default EditUser;
