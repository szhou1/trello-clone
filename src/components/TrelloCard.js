import React from 'react';

const TrelloCard = ({cardId, listId, text, moveCard}) => (
    <div style={styles.card}>
        {text}
        <div>{listId} {cardId}</div>
        <button onClick={moveCard.bind(this, {listId, cardId})}>>></button>
    </div>
)

const styles = {
    card: {

    }
}

export default TrelloCard;