import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2024 Dakcoach. All rights reserved.</div>
      <div>메일: dakcoach@google.com</div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Dakcoach Facebook Account" />
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Dakcoach Instargram Account" />
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Dakcoach X Account" />
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Dakcoach Youtube Account" />
      </div>
    </div>
  );
};

export default Footer;
