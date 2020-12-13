import React from 'react'
import {BodyWrapper,Title,SmallTitle,LoginButton} from './styles/body';
export default function BodyComponents({children,...restProps}) {
return <BodyWrapper {...restProps} >{children}</BodyWrapper> 
}


BodyComponents.MainTitle=function MainTitle({children,...restProps}){
  return <Title {...restProps} >{children}</Title>
}
 
BodyComponents.SubTitle=function SubTitle({children,...restProps}){
return <SmallTitle  {...restProps}>{children}</SmallTitle>
}

BodyComponents.SpotifyButton=function SpotifyButton({children,...restProps}){
return <LoginButton  {...restProps} >{children}</LoginButton>
}

