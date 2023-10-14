import Button from "react-bootstrap/Button";

const styles = {
  container: {
    display: "flex",
    paddingTop: "20px",
    paddingLeft: "1240px",
  },
  button: {
    backgroundColor: "#325B4F",
    border: "hidden",
  },
};

const MoveDownButton = (props) => {
  function scrollDown() {
    window.scrollBy(0, 850);
  }

  return (
    <div style={styles.container}>
      <Button style={styles.button} onClick={() => scrollDown()}>
        Choose your {props.title}!
      </Button>
    </div>
  );
};

export default MoveDownButton;
