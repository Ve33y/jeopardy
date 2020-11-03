import React, { Component } from 'react';
import { StyledCard, StyledBack } from './Card.styled'

type Props = {
  value: number;
  q: any[];
  a: any[];
}
type State = {
  view: string;
  flipped: boolean;
  answered: boolean;
}


class Card extends Component<Props, State> {
  constructor(props: Props){
    super(props);
    this.state = {
      view: 'value',
      flipped: false,
      answered: false,
    }
  }

  flip = () => {
    if(!this.state.answered){
      if(this.state.view === 'value') {
        this.setState({view: 'question', flipped: true});
      }
      else if(this.state.view === 'question') this.setState({view: 'answer'});
      else this.setState({view: 'value', flipped: false, answered: true})
    }
    return;
  }


  render(){
    // styled card but styled back and styled front
    return (
      this.state.answered 
        ? 
        <StyledBack onClick={e => this.flip()}>
          {this.props.q}
        </StyledBack> 
          :
          <StyledCard onClick={e => this.flip()}>
            {`$${this.props.value}`}
          </StyledCard> 
    )
  }
}

export default Card;
