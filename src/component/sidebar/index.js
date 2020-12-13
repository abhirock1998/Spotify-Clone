import React from 'react'
import {BigContainer,Wrapper,MenuOption,Button} from './styles/sidebar';
export default function Sidebar({isOpen,children,...restProps}) {
return <BigContainer {...restProps}  top={isOpen}>{children}</BigContainer>
}

Sidebar.ContentWrapper=function ContentWrapper({children,...restProps}){
return <Wrapper {...restProps}>{children}</Wrapper>
}

Sidebar.Option =function Option({children,style,...restProps}){
    return <MenuOption style={style} {...restProps}>{children}</MenuOption>
}


Sidebar.CloseBtn=function CloseBtn({children,onClick,...restProps}){
return <Button {...restProps} onClick={onClick}>{children}</Button>
}
 
