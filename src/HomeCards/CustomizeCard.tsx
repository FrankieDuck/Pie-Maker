import React, { CSSProperties } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Styles } from "./HomeCardTypes";

const styles: Styles = {
  size: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "400px",
  },
  image: {
    width: "50px",
    height: "50px",
  },
  bottom: {
    height: "40px",
    display: "flex",
    justifyContent: "space-between",
  },
  text: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
};

function CustomizeCard() {
  return (
    <Card style={styles.size}>
      <Card.Body style={styles.text}>
        <Card.Title>Customize your very own unique pie</Card.Title>
        <Card.Text>
          If you are feeling adventours you can also create your very own
          customized pie. Choose from a wide selection of vegetable and meats
          for fillings, rich pastries and crust designs!
        </Card.Text>
        <div style={styles.bottom}>
          <Button
            href="/custom"
            variant="primary"
            style={{ backgroundColor: "#325B4F", border: "hidden" }}
          >
            Customize!
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CustomizeCard;
