import React from 'react';



import {Links,Wrapper,FooterBigBox,Options,Icons,WrapperOficons,Legal,Bottom,LinksOption} from './styles/footer'


export default function FooterContainer({children,...restoProps}){
return <FooterBigBox {...restoProps}>{children}</FooterBigBox>
}



FooterContainer.Conent=function Content({children,...restProps}){
return <Wrapper {...restProps}>{children}</Wrapper>
}

FooterContainer.FooterLinks=function FooterLinks({children,...restProps}){
    return<Links {...restProps}>{children}</Links>
}

FooterContainer.FooterOption=function FooterOption({children,...restProps}){
return <Options {...restProps}>{children}</Options>
}


FooterContainer.IconsWrapper=function IconsWrapper({children,...restProps}){
    return <WrapperOficons {...restProps}>{children}</WrapperOficons>
}


FooterContainer.SocialIcons=function SocialIcons({children,...restProps}){
    return <Icons {...restProps}>{children}</Icons>
}


FooterContainer.LegalOptions=function LegalOptions({children,...restProps}){
    return <Legal {...restProps}>{children}</Legal>
}

FooterContainer.BottomLinks=function BottomLinks({children,...restProps}){
    return <Bottom {...restProps}>{children}</Bottom>
}


FooterContainer.BottomLinksOption=function BottomLinksOption({children,...restProps}){
return <LinksOption {...restProps}>{children}</LinksOption>
}