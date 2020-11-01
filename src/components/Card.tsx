import React from 'react';
import { StyledCard } from './Card.styled'

type Props = {
  amount: String;
}

const Card = ({ amount }: Props) => {
  return (
    <StyledCard>
      {amount}
    </StyledCard>
  )
}

export default Card;
