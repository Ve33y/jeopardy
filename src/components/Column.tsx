import React, { Component } from 'react';
import { StyledColumn } from './Column.styled';
import Card from './Card';

type Props = {}
type State = {
  cardData: any[];
  error: boolean;
  loading: boolean;
}

class Column extends Component <Props, State> {
  constructor(props: Props){
    super(props);

    this.state = {
      cardData: [],
      error: false,
      loading: true,
    }
  }

  getData(){
    const id = Math.random() * 500;
    this.setState({ error: false });
    fetch(`http://jservice.io/api/category?id=${id}`)
    .then(res => res.json())
    .then(categoryInfo => this.setState({
      cardData: [categoryInfo],
      loading: false,
    }))
    .catch(err => {
      console.log(err);
      this.setState({ 
        error: true, 
        loading: false 
      })
    })
  }

  componentDidMount(){
    this.getData();   
  }

  render(){
    const catToDisplay= Object.assign({}, this.state.cardData[0])
    
    const fillCards = (cards: any[] = [], index = 0) => {
      console.log('here')
      while (index < 5){
        cards.push(<Card clues={catToDisplay.clues} value={catToDisplay.clues[index].value}/>);
        index++;
      } 
      return cards;
    };

    if (this.state.error) {
      return <p>Oops</p>;
    }
    return this.state.loading ? (<p className="para">Loading...</p>)
      : 
      (
      <StyledColumn>
        <h3>{catToDisplay.title}</h3>
        {fillCards()}
      </StyledColumn>
      );
  }
}

export default Column;