'use client'

// Category.jsx
import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const [showVideo, setShowVideo] = useState({});
  const data = getData(params.category);

  const handleClick = (id) => {
    setShowVideo({
      ...showVideo,
      [id]: !showVideo[id]
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <button
              className={`${styles.button} ${showVideo[item.id] ? styles.close : ''}`}
              onClick={() => handleClick(item.id)}
            >
              {showVideo[item.id] ? 'Hide Sample' : 'View Sample'}
            </button>

            {/* <button className={styles.button} onClick={() => handleClick(item.id)}>{showVideo[item.id] ? 'Close Sample' : 'View Sample'}</button> */}
            {showVideo[item.id] && (
              <iframe
                width="560"
                height="315"
                src={item.url}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            )}
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src={item.image}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;

