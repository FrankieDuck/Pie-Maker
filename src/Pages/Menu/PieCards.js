import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "../../styles";
import { SnackbarProvider, useSnackbar } from "notistack";

const PieCards = ({ info }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [cart, setCart] = useState([]);
  const [buttonSelected, setButtonSelected] = useState("Add To Cart");
  const [active, setActive] = useState("Added To Cart!");

  const selectedText = (selectedID) => {
    //selectedID = index
    setButtonSelected(selectedID);

    setTimeout(() => {
      setButtonSelected(buttonSelected);
    }, 1000);
  };

  const addToCart = (title, price) => {
    const newItem = { title, price };
    setCart([...cart, newItem]);
    enqueueSnackbar("Pie Added To Cart!");
  };

  useEffect(() => {
    console.log(`these are your items: ${cart}`);
    localStorage.setItem("cart items", JSON.stringify(cart));
  }, [cart]);

  return (
    <SnackbarProvider>
      {info.map(({ image, title, description, price }, index) => (
        <Card
          key={title}
          className="menu-cards"
          style={{
            width: "24rem",
            margin: "auto",
            marginBottom: "50px",
            alignItems: "center",
            paddingTop: "12px",
          }}
        >
          <div>
            <Card.Img variant="top" src={image} style={styles.menuImageSizes} />
          </div>
          <Card.Body>
            <div style={styles.blackTitle}>
              <Card.Title>
                <strong>{title}</strong>
              </Card.Title>
              <Card.Title>
                <strong>{price}</strong>
              </Card.Title>
            </div>
            <Card.Text>{description}</Card.Text>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Button
                variant="success"
                as="input"
                type="button"
                value={index === buttonSelected ? active : "Add To Cart!"}
                onClick={() => {
                  addToCart(title, price);
                  selectedText(index);
                }}
              ></Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </SnackbarProvider>
  );
};

export default PieCards;

PieCards.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
  image: PropTypes.node,
};
