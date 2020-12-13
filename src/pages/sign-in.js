import React from "react";
import { SignForm, SpotifyButton } from "../component/index";

export default function SignUpPage() {

  return (
    <SignForm>
      <SignForm.Logo src="/images/logo.png" alt="spotify-logo" />
      <SignForm.Title>Sign up for free to start listening.</SignForm.Title>
      <SpotifyButton>Sign Up With Facebook</SpotifyButton>
      <SignForm.Divider />
      <SignForm.FormContainer>
        <SignForm.InputLabel>What's your email?</SignForm.InputLabel>
        <SignForm.Input placeholder="Enter your email" />
      </SignForm.FormContainer>
      <SignForm.FormContainer>
        <SignForm.InputLabel>Confirm your email</SignForm.InputLabel>
        <SignForm.Input placeholder="Enter your email again" />
      </SignForm.FormContainer>
      <SignForm.FormContainer>
        <SignForm.InputLabel>Create a password</SignForm.InputLabel>
        <SignForm.Input placeholder="Enter Your Email" />
      </SignForm.FormContainer>
      <SignForm.FormContainer>
        <SignForm.InputLabel>What should we call you?</SignForm.InputLabel>
        <SignForm.Input placeholder="Enter Your Email" />
        <span>This appears on your profile.</span>
      </SignForm.FormContainer>
      <SignForm.FormContainer>
        <SignForm.InputLabel>What's your date of birth?</SignForm.InputLabel>
        <SignForm.DateBirth>
          <SignForm.DateInput>
            <SignForm.Input />
          </SignForm.DateInput>
          <SignForm.DateInput>
            <SignForm.Input />
          </SignForm.DateInput>
          <SignForm.DateInput>
            <SignForm.Input />
           
          </SignForm.DateInput>
        </SignForm.DateBirth>
      </SignForm.FormContainer>
    </SignForm>
  );
}
