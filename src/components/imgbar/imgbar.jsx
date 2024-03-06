import React from "react";
import styles from "./imgbar.module.css";
import Image from "next/image";

const Imgbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://cdn.pixabay.com/photo/2024/02/23/17/26/clock-8592484_1280.jpg"
          // src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Journey to the Dream</h1>
          <h2 className={styles.imgDesc}>
            미디어 제작의 노하우, 꿈을 향한 여정을 닥코치와 함께 시작하세요!
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
      </div>
    </div>
  );
};

export default Imgbar;
