import React, { useContext } from 'react';
import PieCards from './PieCards';
import styles from '../../styles';

function MenuPage() {
    return (
        <>
        <div>
        <h1 style={styles.title}>MENU</h1>
        </div>
        <div style={styles.menuGridContainer}>
        <PieCards
         {...{info: [
            {
                image: "/images/MeatIcons/Ham.png",
                title: "Traditional Irish",
                description: "Our award winning meat, potato and cabbage pie. Deep filled with rich gravy.",
                price: `£7.30`
            },
            {
                image: "/images/MeatIcons/Beef.png",
                title: "Beef & Kidney",
                description: "A fine tuned mixture of diced beef, diced kidney and onion.",
                price: `£6.90`
            },
            {
                image: "/images/MeatIcons/Fish.png",
                title: "Fishermans",
                description: "Locally sourced cod mixed with a creamy cheddar source, topped with mashed potato.",
                price: `£5.90`
            },
            {
                image: "/images/ExtraIcons/Garlic.png",
                title: "Brocolli & Cheese",
                description: "A deep filled pie with brocolli and a blend of cheddar and cream garlic.",
                price: `£5.70`
            },
            {
                image: "/images/MeatIcons/Chicken.png",
                title: "Chicken & Mushroom",
                description: "Golden mushrooms, onions and creamy chicken all baked under a puff pastry lid.",
                price: `£6.70`
            },
            {
                image: "/images/MeatIcons/Lamb.png",
                title: "Wild Game",
                description: "Deep filled with a mix of game; turkey, boar, venison and rabbit",
                price: `£7.80`
            },
            {
                image: "/images/MeatIcons/Chorizo.png",
                title: "Sausage & Fennel",
                description: "Spicy njuda sausage and beef chunks with an onion and fennel gravy. ",
                price: `£7.50`
            },
            {
                image: "/images/ExtraIcons/Chilli.png",
                title: "The Spicy One",
                description: "Beef filling and heavily spiced with garlic, onions, hot pepper, thyme, paprika and curry",
                price: `£6.90`
            },
            {
                image: "/images/ExtraIcons/MixedHerbs.png",
                title: "Cheese & Onion",
                description: "Savoury pastry filled with a mixture of cheese, onion, herbs and potato.",
                price: `£5.00`
            },
            {
                image: "/images/ExtraIcons/Paprika.png",
                title: "The Everything",
                description: "A blend of all the meats with mixed herbs in a rich gravy.",
                price: `£7.60`
            },
            {
                image: "/images/ExtraIcons/Mustard.png",
                title: "Poultry & Mustard",
                description: "Chicken and turkey in a creamy cheese sauce with a mustard baked pastry.",
                price: `£6.50`
            },
            {
                image: "/images/MeatIcons/Turkey.png",
                title: "Mixed Veg & Quorn",
                description: "Deep filled pie with peas, carrots, suede, onion and potato with chunks of Quorn meat.",
                price: `£5.50`
            },
        ],
        }}
        />
        </div>
        </>
    )
}

export default MenuPage;