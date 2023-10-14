import React, { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import styles from "../../styles";
import { useSnackbar } from "notistack";

function CheckoutPage() {
  const [items, setItems] = useState([]);
  const [customCartItems, setCustomCartItems] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  console.log(customCartItems);

  useEffect(() => {
    const cartContents = JSON.parse(window.localStorage.getItem("cart items"));
    setItems(cartContents);
  }, []);

  useEffect(() => {
    const customCartContents = JSON.parse(
      window.localStorage.getItem("custom cart items")
    );
    setCustomCartItems(customCartContents);
  }, []);

  const clearCart = () => {
    setItems([]);
    setCustomCartItems([]);
    enqueueSnackbar("Cart Cleared");
    window.localStorage.clear();
    window.location.reload();
  };

  const totalPrice =
    items && items.length > 0
      ? items
          .map((item) => {
            const priceWithoutSymbol = item.price.replace("£", "");
            const parsedPrice = parseFloat(priceWithoutSymbol || 0);
            return parsedPrice;
          })
          .reduce((total, price) => {
            return total + price;
          }, 0)
      : 0;

  const additionalCost = customCartItems?.length > 0 ? 8.5 : 0;
  const totalCost = (totalPrice + additionalCost).toFixed(2);

  console.log(items);

  return (
    <>
      <div>
        <h1 style={styles.title}>CART</h1>
      </div>
      <div style={styles.cartCheckoutContainer}>
        <div>
          <h3 style={{ color: "white" }}>These are the items in your cart:</h3>

          <div style={{ color: "white" }}>
            {customCartItems?.length > 0 && (
              <h5 style={{ marginRight: "10px" }}>
                Custom Pie
                <span style={{ marginLeft: "40px" }}>£8.50</span>
              </h5>
            )}
          </div>

          <div style={{ color: "white" }}>
            {items?.length > 0 &&
              items.map((item, index) => (
                <>
                  <h5 key={index} style={{ marginRight: "10px" }}>
                    {item.title}
                    <span style={{ marginLeft: "40px" }}>{item.price}</span>
                  </h5>
                </>
              ))}
          </div>
        </div>

        <div>
          <h3 style={{ color: "white" }}>Total: £{totalCost} </h3>
          <Button style={styles.greenButton} onClick={() => clearCart()}>
            Clear Cart
          </Button>
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;
