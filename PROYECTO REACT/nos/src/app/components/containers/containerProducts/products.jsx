import React from "react";
import nosSpeak from "@/assets/NOS-Spek.png";
import NosOs from "@/assets/NOS-Os.png";
import Z8pro from "@/assets/Z9-Pro-productos.png";
import NosSon from "@/assets/NOS-Son 3.png";
import X1Pro from "@/assets/X1-Pro-productos.png";
import Z11 from "@/assets/Z11-Pro.png";
import { ImageRender } from "@/UI/Image/image";
import styles from "./products.module.scss";

export const Products = () => {
  return (
    <div className={styles.containerProducts} id="products">
      <h1>Diseñados para sentir cada nota con claridad y emoción.</h1>

      <div className={styles.slider}>
        <div className={styles.cardProduct}>
          <div className={styles.newItem}>
            <small>Nuevo</small>
          </div>
          <div className={styles.cover}>
            <ImageRender
              propImg={nosSpeak}
              modifiers={{ className: styles.cardImage }}
            />
          </div>
          <div className={styles.description}>
            <strong>NOS Spek</strong>
            <small>Premium Speaker</small>
          </div>
        </div>
        <div className={styles.cardProduct}>
          <div className={styles.cover}>
            <ImageRender
              propImg={NosOs}
              modifiers={{ className: styles.cardImage }}
            />
          </div>
          <div className={styles.description}>
            <strong>NOS Os</strong>
            <small>Premium Speaker</small>
          </div>
        </div>
        <div className={styles.cardProduct}>
          <div className={styles.cover}>
            <ImageRender
              propImg={Z8pro}
              modifiers={{ className: styles.cardImage }}
            />
          </div>
          <div className={styles.description}>
            <strong>Z9 Pro</strong>
            <small>Headphones Premium</small>
          </div>
        </div>
        <div className={styles.cardProduct}>
          <div className={styles.cover}>
            <ImageRender
              propImg={NosSon}
              modifiers={{ className: styles.cardImage }}
            />
          </div>
          <div className={styles.description}>
            <strong>NOS Son 3</strong>
            <small>Premium Earphones</small>
          </div>
        </div>
        <div className={styles.cardProduct}>
          <div className={styles.cover}>
            <ImageRender
              propImg={X1Pro}
              modifiers={{ className: styles.cardImage }}
            />
          </div>
          <div className={styles.description}>
            <strong>X1 Pro</strong>
            <small>Premium Headphones</small>
          </div>
        </div>
        <div className={styles.cardProduct}>
          <div className={styles.cover}>
            <ImageRender
              propImg={Z11}
              modifiers={{ className: styles.cardImage }}
            />
          </div>
          <div className={styles.description}>
            <strong>Z11 Pro</strong>
            <small>Headphones Premium</small>
          </div>
        </div>
      </div>
    </div>
  );
};
