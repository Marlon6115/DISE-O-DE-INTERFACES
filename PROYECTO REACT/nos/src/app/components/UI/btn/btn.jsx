import React from "react";
import Link from "next/link";
import styles from "./btn.module.scss";

export const Btn = ({
  href,
  text,
  onClick,
  type,
  id,
  btnColor = "white" | "black" | "linkWhite" | "linkBlack" | "transparent",
}) => {
  return href ? (
    <Link
      className={`${styles.itembtn} ${styles.link} ${styles[btnColor]}`}
      href={href || "/"}
      key={id}
    >
      <div className={styles.link}>{text}</div>
    </Link>
  ) : (
    <button
      className={`${styles.itembtn} ${styles[btnColor]}`}
      key={id}
      onClick={onClick}
      type={type || "button"}
    >
      <div className={`${styles.link} `}>{text}</div>
    </button>
  );
};
