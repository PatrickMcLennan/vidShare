import React from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler, IUser } from "common";

interface IProps {
  onSubmit: SubmitHandler;
  user: IUser;
}

function Form({ onSubmit, user }: IProps): JSX.Element {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    },
  });

  return (
    <form data-testid="form" onSubmit={handleSubmit(onSubmit)}>
      <h1>Change your life here</h1>
      <label htmlFor="firstName">
        <span>
          First Name <sup data-testid="firstName_sup">*</sup>
        </span>
        <input
          data-testid="firstName_input"
          name="firstName"
          ref={register({ required: true })}
          type="text"
        />
      </label>
      <label htmlFor="lastName">
        <span>
          Last Name <sup data-testid="lastName_sup">*</sup>
        </span>
        <input
          data-testid="lastName_input"
          name="lastName"
          ref={register({ required: true })}
          type="text"
        />
      </label>
      <label htmlFor="email">
        <span>
          Email <sup data-testid="email_sup">*</sup>
        </span>
        <input
          data-testid="email_input"
          name="email"
          ref={register({ required: true })}
          type="email"
        />
      </label>
    </form>
  );
}

export default Form;
