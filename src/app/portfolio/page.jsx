import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Imgbar from "@/components/imgbar/imgbar";

const Portfolio = () => {
  return (
    <>
      <Imgbar />
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>My Works & Portfolio</h1>
        <div className={styles.items}>
          <Link href="/portfolio/videos" className={styles.item}>
            <span className={styles.title}>Videos</span>
          </Link>
          <Link href="/portfolio/websites" className={styles.item}>
            <span className={styles.title}>Websites</span>
          </Link>
          <Link href="/portfolio/educations" className={styles.item}>
            <span className={styles.title}>Educations</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
