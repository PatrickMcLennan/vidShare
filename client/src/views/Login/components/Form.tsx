import React from "react";
import { useForm } from "react-hook-form";

import * as S from "../Login.style";

interface IProps {
  onSubmit: SubmitHandler;
}

function Form({ onSubmit }: IProps): JSX.Element {
  const { handleSubmit, errors, register } = useForm({
    defaultValues: {
      email: localStorage.getItem(`vidShareEmail`) ?? ``,
    },
  });
  return (
    <S.Form data-testid="form" onSubmit={handleSubmit(onSubmit)}>
      <S.H6>who dis</S.H6>
      <S.Label error={errors.email} htmlFor="email">
        <span>
          Email <sup data-testid="email_sup">*</sup>
        </span>
        <input
          data-testid="email_input"
          name="email"
          placeholder="someguy@whatever.com"
          ref={register({ required: true })}
          type="email"
        />
      </S.Label>
      <S.Label error={errors.password} htmlFor="password">
        <span>
          Password <sup data-testid="password_sup">*</sup>
        </span>
        <input
          data-testid="password_input"
          name="password"
          placeholder="it doesn't have to be crazy"
          ref={register({ required: true })}
          type="password"
        />
      </S.Label>

      <S.Submit type="submit" value="Sign In" />
      <S.Divider aria-hidden="true" />
      <S.RegisterLink to="/register">Register Here</S.RegisterLink>
    </S.Form>
  );
}

export default Form;
