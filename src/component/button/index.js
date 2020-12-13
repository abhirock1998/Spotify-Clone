import React from 'react';
import {RoundedBorder} from './styles/button';

export default function RoundedButton({children,background,color,...restProps}){
return <RoundedBorder  background={background} color={color} {...restProps}>{children}</RoundedBorder>
}