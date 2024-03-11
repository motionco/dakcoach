'use client'
import React from 'react'
import Lottie from 'react-lottie-player'
import styles from "./animation.module.css";

import lottieJson from '/public/animation.json'

export default function Animation() {
    return (
        <Lottie
            loop
            animationData={lottieJson}
            play
            className={styles.ani}
        // style={{ width: 500, height: 500 }}
        />
    )
}