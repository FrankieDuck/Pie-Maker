import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const styles = {
  banner: {
  },
  size: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    height: "70px"
  }
}

function DeliveryBanner() {
  const [visible, setVisible] = useState(true);

  setTimeout(() => {
    setVisible(false)
  }, 10000)

  return (
    <div >
      <Alert show={visible} variant="success" style={styles.size}>
        <Alert.Heading>Free Delivery!</Alert.Heading>

        <p>
          Over the festive season get free delivery on orders over £50! These can be from the menu, customization or offers range.
        </p>
          <Button onClick={() => setVisible(false)} variant="outline-success">
            Thanks!
          </Button>
      </Alert>
      </div>
  );
}

export default DeliveryBanner;