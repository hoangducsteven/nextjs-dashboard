import React from 'react';
import Image from 'next/image';
import styles from './Menu.module.css';

const ImageGallery = () => {
  return (
    <div className={styles.containerWrapper}>
      <div className={styles.title}>KFC MENU</div>
      <div className={styles.container}>
        {[
          { src: "/kfc-deals.png", label: "DEALS" },
          { src: "/kfc-Featured2.png", label: "FEATURED" },
          { src: "/kfc-combos.png", label: "COMBOS" },
          { src: "/family.png", label: "FAMILY MEALS" },
          { src: "/fried-chicken.png", label: "FRIED CHICKEN" }
        ].map(item => (
          <div className={styles.box} key={item.label}>
            <Image src={item.src} alt={item.label} width={200} height={150} layout="responsive" />
            <div className={styles.navBar}>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
