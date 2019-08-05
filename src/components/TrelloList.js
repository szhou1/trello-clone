import React from "react";
import TrelloCard from "./TrelloCard";

class TrelloList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      title: props.title,
      cards: props.cards
    };

    this.moveCardRight = props.moveCard.bind(this);
  }

  render() {
    return (
      <div style={styles.listContainer}>
        <p style={styles.listTitle}>{this.state.title}</p>
        <div style={styles.list}>
          {this.state.cards.map(card => (
            <TrelloCard
              key={card.id}
              cardId={card.id}
              listId={this.state.id}
              text={card.text}
              moveCard={this.moveCardRight}
            />
          ))}
        </div>
        <button
          onClick={e => {
            const newCardText = window.prompt("Enter card text", "");

            this.setState(state => ({
              cards: [...state.cards, { id: 2, text: newCardText }]
            }));
          }}
        >
          Add a card
        </button>
      </div>
    );
  }
}

const styles = {
  listContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 25
  },
  listTitle: {
    backgroundColor: "#8E6E95",
    textAlign: "center",
    color: "white"
  },
  list: {
    display: "flex",
    flexDirection: "column"
  }
};

export default TrelloList;
