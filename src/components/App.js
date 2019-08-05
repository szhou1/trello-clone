import React, { Component } from "react";
import TrelloList from "./TrelloList";
import { connect } from "react-redux";

class App extends Component {
  render() {
    const { lists } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <h2>Hello</h2>
          <div style={styles.listsContainer}>
            {lists.map(list => (
              <TrelloList title={list.title} cards={list.cards} />
            ))}
          </div>
        </header>
      </div>
    );
  }
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row"
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
