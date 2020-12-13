import React from "react";

import {
  SignContainer,
  LogoImage,
  Heading,
  HorizontalDivider,
  InputArea,
  Label,
  Container,
  DOB,
  Date
} from "./styles/signForm";

export default function SignForm({ children, ...restprops }) {
  return <SignContainer {...restprops}>{children}</SignContainer>;
}

SignForm.Logo = function Logo({ src }) {
  return <LogoImage src={src} />;
};

SignForm.Title = function Title({ children }) {
  return <Heading>{children}</Heading>;
};

SignForm.Divider = function Divider() {
return <HorizontalDivider />;
};


SignForm.FormContainer=function FormContainer({children,...restprops}){
return <Container {...restprops}>{children}</Container>
}

SignForm.InputLabel=function InputLabel({children,...restprops}){
return <Label {...restprops}>{children}</Label>
}



SignForm.Input = function Input({ placeholder, value,type, onChanged }) {
  return (
    <InputArea placeholder={placeholder} type={type} value={value} onChanged={onChanged} />
  );
};


SignForm.DateBirth=function DateBirth({children,...restprops}){
return <DOB {...restprops}>{children}</DOB>
}

SignForm.DateInput=function DateInput({children}){
return <Date>{children}</Date>
}