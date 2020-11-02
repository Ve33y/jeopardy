import React, { Component } from 'react';
import { StyledColumn } from './Column.styled';
import Card from './Card';

type Props = {}
type State = {
  cardData: [];
}

class Column extends Component <Props, State> {
  constructor(props: Props){
    super(props);

    this.state = {
      cardData: [],
    }
  }

  render(){
    
    return (
      <StyledColumn>
      <h1>hey</h1>
      <Card amount="$100"/>
      <Card amount="$100"/>
      <Card amount="$100"/>
      <Card amount="$100"/>
      <Card amount="$100"/>
      </StyledColumn>
    )
  }
}

export default Column;