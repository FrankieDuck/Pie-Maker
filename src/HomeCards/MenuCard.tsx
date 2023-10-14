import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Styles } from "./HomeCardTypes";

const styles: Styles = {
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

function MenuCard() {
    return (
            <Card style={styles.size}>
            <Card.Body style={styles.text}>
                <Card.Title>Choose from a selection of pies</Card.Title>
                <Card.Text>
                Over 160 years our home made recipes have been passed down and perfected for 
                some award-winning pies. From classic steak and kidney to pigeon and mushroom.
                </Card.Text>
                <div style={styles.bottom}>
                <Button href="/menu" style={{ backgroundColor: "#325B4F", border: "hidden"}}>Menu!</Button>
                </div>
            </Card.Body>
            </Card>
    )
}

export default MenuCard;