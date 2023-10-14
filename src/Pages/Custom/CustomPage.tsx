import { useEffect, useState } from "react";
import MeatGridCard from "./MeatGridCard";
import ExtrasGridCard from "./ExtrasGridCard";
import VegetableGridCard from "./VegetableGridCard";
import CrustGridCard from "./CrustGridCard";
import TotalPie from "./TotalPie";
import MoveDownButton from "../../ScrollButtons/MoveDownButton";
import MoveUpButton from "../../ScrollButtons/MoveUpButton";
import styles from "../../styles";
import data from "../../data/customPieData.json";

function loadData() {
  const meatData = data.meat;
  const crustData = data.crust;
  const vegData = data.vegetables;
  const extrasData = data.extras;
  return { meatData, crustData, vegData, extrasData };
}

const { meatData, crustData, vegData, extrasData } = loadData();

function CustomPage() {
  const [totalSelected, setTotalSelected] = useState<string[]>([]);

  const handleCardTitle = (cardTitle: string[]) => {
    setTotalSelected((prevMasterCardTitle: string[]) => {
      const updatedCardTitle = [...prevMasterCardTitle, ...cardTitle];
      const uniqueCardTitle = [...new Set(updatedCardTitle)]; // Remove duplicate entries
      return uniqueCardTitle;
    });
  };

  return (
    <>
      <div style={styles.customIntroBar}>
        <p style={styles.title}>
          Create your very own unique pie! Choose from a wide selection of
          vegetable and meats for fillings, unique extras and crust designs!
          Choose up to three meats, four vegetables, three extras and complete
          it with your choice of crust design!
        </p>
      </div>
      <div>
        <div>
          <TotalPie totalSelected={totalSelected} />
        </div>
        <div style={styles.gridContainer}>
          <MeatGridCard meatData={meatData} onCardTitle={handleCardTitle} />
        </div>
        <MoveDownButton title={"Vegetables"} />
        <div style={styles.gridContainer}>
          <VegetableGridCard vegData={vegData} onCardTitle={handleCardTitle} />
        </div>
        <MoveDownButton title={"Extras"} />
        <div style={styles.gridContainer}>
          <ExtrasGridCard
            extrasData={extrasData}
            onCardTitle={handleCardTitle}
          />
        </div>
        <MoveDownButton title={"Crust"} />
        <div style={styles.customCrustContainer}>
          <CrustGridCard crustData={crustData} onCardTitle={handleCardTitle} />
        </div>
        <MoveUpButton />
      </div>
    </>
  );
}

export default CustomPage;
