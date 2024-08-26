import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../dashboard/menu.module.css';

const ImageGallery = () => {
  const boxes = [
    { src: "/kfc-deals.png", label: "DEALS", href: "/menu/deals" },
    { src: "/kfc-Featured2.png", label: "FEATURED", href: "/menu/featured" },
    { src: "/kfc-combos.png", label: "COMBOS", href: "/menu/combos" },
    { src: "/family.png", label: "FAMILY MEALS", href: "/menu/family-meals" },
    { src: "/fried-chicken.png", label: "FRIED CHICKEN", href: "/menu/fried-chicken" },
    { src: "/kfc-2pcTenders.png", label: "TENDERS", href: "/menu/tenders" },
    { src: "/kfc-8pcNuggets.png", label: "NUGGETS", href: "/menu/nuggets" },
    { src: "/kfc-sandwiches.png", label: "SANDWICHES", href: "/menu/sandwiches" },
    { src: "/kfc-FamousBowlNuggets.png", label: "POT PIES & BOWLS", href: "/menu/pot-pies-bowls" },
    { src: "/kfc-SidesSweetsSauces.png", label: "SIDES, SWEETS, SAUCES", href: "/menu/sides-sweets-sauces" },
    { src: "/kfc-drinks.png", label: "DRINKS", href: "/menu/drinks" },
  ];

  return (
    <div style={{ padding: '20px', position: 'relative', minHeight: '100vh' }}>
      <div style={{ 
        backgroundColor: '#f7f2f2', 
        color: '#000', 
        padding: '20px', 
        textAlign: 'center',
        margin: '0',          // Ensure no margin
        border: 'none',       // Ensure no border
        boxSizing: 'border-box',
        position: 'fixed',    // Fix to the top of the page
        top: '0',             // Ensure it's at the top
        left: '0',            // Ensure it covers the left side
        width: '100%',        // Cover the full width of the screen
        zIndex: 1000,         // Ensure it stays on top of other elements
      }}>
        Top Navbar
      </div>

      <div style={{ marginTop: '100px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <h1 style={{ margin: '0 0 10px 10px', fontSize: '28px', fontWeight: 'bold' }}>
          KFC MENU
        </h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', width: '100%' }}>
          {boxes.map((item) => (
            <Link href={`/menu/${item.label.toLowerCase().replace(/ /g, '-')}`} key={item.label} passHref>
              <div style={{ 
                width: '180px', 
                height: '220px', 
                border: '2px solid #ccc', 
                margin: '10px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#fff'
              }}>
                <div style={{ width: '100%', height: '150px', position: 'relative' }}>
                  <Image src="/kfc-Featured2.png" fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ 
                  textAlign: 'center', 
                  padding: '10px', 
                  backgroundColor: '#f7f2f2', 
                  width: '100%',
                  fontWeight: 'bold'
                }}>
                  {item.label}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div style={{
        backgroundColor: '#000', 
        color: '#fff', 
        padding: '20px', 
        textAlign: 'center', 
        position: 'fixed', 
        bottom: '0', 
        left: '0', 
        width: '100%',
        marginTop: 'auto',
        border: 'none', // Ensure no border at the bottom
      }}>
        Bottom Navbar
      </div>
    </div>
  );
};

export default ImageGallery;