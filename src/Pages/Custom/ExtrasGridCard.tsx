import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import styles from "../../styles";

const ExtrasGridCard = ({ extrasData, onCardTitle }) => {
  const [active, setActive] = useState("extracards");
  const [cardTitle, setCardTitle] = useState([]);
  const [selectedCard, setSelectedCard] = useState();

  const clickGetTitle = (title) => {
    const updatedCardTitle = [...cardTitle, title];
    setCardTitle(updatedCardTitle);
    onCardTitle(updatedCardTitle); // Call the prop to pass the updated cardTitle array to the parent
  };

  const cardSelected = (selectedID) => {
    setSelectedCard(selectedID);
  };

  return extrasData.map(({ image, title, id }, index) => (
    <Card
      style={styles.cards}
      key={id}
      className={index == selectedCard ? active : null}
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

export default ExtrasGridCard;
