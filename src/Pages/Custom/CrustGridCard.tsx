import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import styles from "../../styles";

const CrustGridCard = ({ crustData, onCardTitle  }) => {
  const [active, setActive] = useState("crustcards");
  const [cardTitle, setCardTitle] = useState([]);
  const [selectedCard, setSelectedCard] = useState();

  const clickGetTitle = (title) => {
    const updatedCardTitle = [...cardTitle, title];
    setCardTitle(updatedCardTitle);
    onCardTitle(updatedCardTitle); 
  };

  const cardSelected = (selectedID) => {
    setSelectedCard(selectedID);
  };

  return crustData.map(({ image, title, id }, index) => (
    <Card
      style={styles.cards}
      key={id}
      className={index == selectedCard ? active : ""}
      onClick={() => {
        cardSelected(index);
        clickGetTitle(title);
      }}
    >
      <div id={id}>
        <Card.Img variant="top" src={image} />
      </div>
      <Card.Body>
        <Card.Title>
          <strong>{title}</strong>
        </Card.Title>
      </Card.Body>
    </Card>
  ));
};

export default CrustGridCard;
