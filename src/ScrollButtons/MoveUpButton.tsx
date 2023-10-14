import React from "react";
import Button from "react-bootstrap/Button";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "20px",
  },
  button: {
    backgroundColor: "#cc0000",
    border: "hidden",
  },
};

const MoveUpButton = () => {
  function scrollUp() {
    window.scrollTo(1200, 0);
  }

  return (
    <div style={styles.container}>
      <Button style={styles.button} onClick={() => scrollUp()}>
        Return To The Top
      </Button>
    </div>
  );
};

export default MoveUpButton;
