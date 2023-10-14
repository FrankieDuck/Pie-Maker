import { useState } from "react";
import Card from "react-bootstrap/Card";
import styles from "../../styles";

const MeatGridCard = ({ meatData, onCardTitle }) => {
  const [active, setActive] = useState("meatcards");
  const [cardTitle, setCardTitle] = useState([]);
  const [selectedCard, setSelectedCard] = useState();

  //selectedCard is a number that represents its posistion
  //cardTitle is the title of the card, e.g 'lamb'

  // The event handler updates the selectedCard state with the current index value.
  //  if the cardTitle length is less than or equal to 2,
  //  it appends the title of the clicked card to the cardTitle state array.

  const clickGetTitle = (title) => {
    const updatedCardTitle = [...cardTitle, title];
    setCardTitle(updatedCardTitle);
    onCardTitle(updatedCardTitle);
  };

  const cardSelected = (selectedID) => {
    setSelectedCard(selectedID);
  };

  return meatData.map(({ image, title, id }, index) => (
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

export default MeatGridCard;
