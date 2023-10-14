import React from 'react';
import CustomizeCard from '../HomeCards/CustomizeCard';
import HomeCard from '../HomeCards/HomeCard';
import MenuCard from '../HomeCards/MenuCard';
import DeliveryBanner from '../DeliveryBanner';
import OffersCard from '../HomeCards/OffersCard';
import styles from '../styles';



function HomePage() {
    return (
        <>  
        <DeliveryBanner />
        <div style={styles.homePageContainer}>
        <HomeCard />
        <br/>
        <div style={styles.menuCards}>
        <MenuCard />
        <CustomizeCard />
        <OffersCard />
        </div>
        </div>
        </>
    )
}

export default HomePage;