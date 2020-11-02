import React from 'react';
import { StyledCard } from './Card.styled'

type Props = {
  value?: number;
  clues: [];
}

const Card = ({ value, clues }: Props) => {
  console.log('these are my clues', clues)
  return (
    <StyledCard>
      {value}
    </StyledCard>
  )
}

export default Card;
