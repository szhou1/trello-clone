import React from "react";
// import './App.css';
import TrelloList from "./components/TrelloList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardList
    };
  }

  moveCard = ({ listId, cardId }) => {
    console.log(listId, cardId);
    let cardToMove;
    console.log(cardList);
    const list = this.state.cardList.find(list => list.id === listId);
    let listIndex;
    this.state.cardList.forEach((list, i) => {
      if (list.id === listId) {
        listIndex = i;
      }
    });
    let cardIndex = 0;
    list.cards.forEach((card, i) => {
      if (card.id === cardId) {
        cardIndex = i;
      }
    });
    cardToMove = list.cards.splice(cardIndex, 1);

    const listDestination = this.state.cardList.find(list => list.id === listIndex+1);
    console.log(listIndex, cardIndex, listDestination);
    console.log(cardToMove);
    listDestination.cards.push(cardToMove[0]);

    this.setState({
      cardList
    });
  };

  render() {
    return (
      <div className="App" style={styles.listContainer}>
        {cardList.map(list => (
          <TrelloList key={list.id} {...list} moveCard={this.moveCard} />
        ))}
      </div>
    );
  }
}

const styles = {
  listContainer: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 25
  }
};

const cardList = [
  {
    id: 0,
    title: "title0",
    cards: [
      {
        id: 0,
        text: "First card"
      },
      {
        id: 1,
        text: "Second card"
      }
    ]
  },
  {
    id: 1,
    title: "title1",
    cards: [
      {
        id: 10,
        text: "First card"
      },
      {
        id: 11,
        text: "Second card"
      }
    ]
  },
  {
    id: 2,
    title: "title2",
    cards: [
      {
        id: 20,
        text: "First card"
      },
      {
        id: 21,
        text: "Second card"
      }
    ]
  },
  {
    id: 3,
    title: "title3",
    cards: [
      {
        id: 30,
        text: "First card"
      },
      {
        id: 31,
        text: "Second card"
      }
    ]
  }
];

export default App;
