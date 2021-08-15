import React, { ReactElement } from "react";
import {
  Container,
  Icon,
  FormWrap,
  Form,
  FormContent,
  FormTitle,
  FormLabel,
  FormInput,
  FormButton,
  FormText,
} from "./styled";

export default function SignIn(): ReactElement {
  return (
    <Container>
      <FormWrap>
        <Icon to="/"> NFT </Icon>
        <FormContent>
          <Form action="#">
            <FormTitle>Sign in to your account</FormTitle>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput type="email" id="email" required />
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput type="password" id="password" required />
            <FormButton type="submit">Continue</FormButton>
            <FormText>Forgot password?</FormText>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
}
