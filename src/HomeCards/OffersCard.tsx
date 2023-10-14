import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const styles = {
  size: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "400px"
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
    justifyContent: "space-evenly"
    }
}


function OffersCard() {
    return (
            <Card style={styles.size}>
            <Card.Body style={styles.text}>
                <Card.Title>Check out some of the current offers!</Card.Title>
                <Card.Text>
                Follow the link below to view some of the seasonal, referral, loyalty and one-off deals we are currently running. 
                Along with our free delivery on orders over £50!
                </Card.Text>
                <div style={styles.bottom}>
                    <Button href="/custom" variant="primary" style={{ backgroundColor: "#325B4F", border: "hidden"}}>Offers!</Button>
                </div>
            </Card.Body>
            </Card>
    )
}

export default OffersCard;