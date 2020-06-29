import React from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "common";
import * as S from "../Register.style";

interface IProps {
  onSubmit: SubmitHandler;
}

function Form({ onSubmit }: IProps): JSX.Element {
  const { errors, register, handleSubmit, watch } = useForm();
  return (
    <S.Form data-testid="form" onSubmit={handleSubmit(onSubmit)}>
      <S.H6>Create an Account</S.H6>
      <S.TopSpan>please</S.TopSpan>
      <S.Label className="firstName" error={errors.email} htmlFor="firstName">
        <span>
          First Name <sup data-testid="firstName_sup">*</sup>
        </span>
        <input
          data-testid="firstName_input"
          name="firstName"
          placeholder={
            ["John", "Carol", "Brenda", "Ivan", "Marko"][
              Math.floor(Math.random() * 5)
            ]
          }
          ref={register({ required: true })}
          type="text"
        />
      </S.Label>
      <S.Label className="lastName" error={errors.email} htmlFor="lastName">
        <span>
          Last Name <sup data-testid="lastName_sup">*</sup>
        </span>
        <input
          data-testid="lastName_input"
          name="lastName"
          placeholder={
            ["Baskins", "The Destroyer", "Doe", "Spielberg", "Polo"][
              Math.floor(Math.random() * 5)
            ]
          }
          ref={register({ required: true })}
          type="text"
        />
      </S.Label>
      <S.Label className="email" error={errors.email} htmlFor="email">
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
      <S.Label className="password" error={errors.password} htmlFor="password">
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
      <S.Label
        className="confirmPassword"
        error={errors.password}
        htmlFor="confirmPassword"
      >
        <span>
          Confirm Password <sup data-testid="confirmPassword_sup">*</sup>
        </span>
        <input
          data-testid="confirmPassword_input"
          name="confirmPassword"
          placeholder="seriously keep it simple, i don't care"
          ref={register({
            required: true,
            validate: (value) => value === watch("password"),
          })}
          type="password"
        />
      </S.Label>

      <S.Submit type="submit" value="Create Account" />
    </S.Form>
  );
}

export default Form;
