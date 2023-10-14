import React from 'react';
import Card from 'react-bootstrap/Card';

const styles = {
    logo: {
        display: "flex",
        justifyContent: "center",
        height: "200px",
        width: "200px",
    },
    cardSize: {
        width: '1400px',
        alignItems: "center",
        margin: "auto",
        marginTop: "30px"
    },
    textAlign: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
    },
}

function HomeCard() {
    return (
        <>
            <Card style={styles.cardSize}>
                <div style={styles.logo}>
                    <Card.Img variant="top" src="/images/Logos/great-taste.jpg" />
                    <Card.Img variant="top" src="/images/MainLogo.png" />
                    <Card.Img variant="top" src="/images/Logos/pie-award.png" />
                </div>
                <Card.Body style={styles.textAlign}>
                    <Card.Title>Who are we?</Card.Title>
                    <Card.Text>
                        Fat Frank's Pies first esatablished in Ireland over 160 years ago in the county of Donegal, Ireland!
                        A family run business that began with a staple meat, potato and cabbage that was famed as the working man's dish.
                        Over the years this base recipe has grown, developed and perfected into an award winning dish, winning gold place six times in the British Pie Awards.
                        Awarded a 3 star rating by the Great Taste awards and even featured as the official wedding cake to Brian Blessed and his partner in 1978!
                    </Card.Text>
                    <Card.Text>
                        In 2022 we now have over 12 unique homemade pies with a seasonal and monthly pie rotation. If that isn't enough option for you we also recently
                        released our pie customization. You choose exactly what goes in and how your pie looks with over 90 thousand choices! from crimped shortcrust, chroizo and venison
                        to a scalloped open-topped lamb, rabbit and beef pie garnished with locally sourced mustard!
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default HomeCard;