import React from 'react';
import { StyledColumn } from './Column.styled';
import Card from './Card';

type Props = {
  category: String;
}

const Column = ({ category }: Props) => {
  return (
    <StyledColumn>
    <h1>{category}</h1>
    <Card amount="$100"/>
    <Card amount="$100"/>
    <Card amount="$100"/>
    <Card amount="$100"/>
    <Card amount="$100"/>
    </StyledColumn>
  )
}

export default Column;