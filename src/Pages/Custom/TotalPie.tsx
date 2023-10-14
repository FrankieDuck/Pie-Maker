import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "../../styles";
import { useSnackbar } from "notistack";
import { TotalPieProps, Cart } from "./CustomTypes";

const TotalPie = ({ totalSelected }: TotalPieProps) => {
  const { enqueueSnackbar } = useSnackbar();
  const [cart, setCart] = useState<Cart>([]);

  const addToCart = (totalSelected: TotalPieProps) => {
    if (totalSelected.length > 0) {
      enqueueSnackbar("Pie Added To Cart!");
      setCart([...cart, totalSelected]);
    } else {
      enqueueSnackbar(
        "Please select from the ingredients to create your custom pie!",
        {
          variant: "warning",
        }
      );
    }
  };

  useEffect(() => {
    console.log(`these are your items: ${cart}`);
    if (totalSelected.length > 0) {
      localStorage.setItem("custom cart items", JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <Card style={styles.customTotalContainer}>
      <Card.Body style={styles.totalPie}>
        <Card.Title>
          <strong>Your Selected Ingredients: </strong>
        </Card.Title>
        <ul style={{ listStyleType: "disc" }}>
          {totalSelected.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Card.Body>
      <Button
        style={styles.greenButton}
        onClick={() => addToCart(totalSelected)}
      >
        Add To Cart!
      </Button>
    </Card>
  );
};

export default TotalPie;
