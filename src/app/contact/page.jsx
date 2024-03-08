"use client";
import React from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import sanitizeHtml from 'sanitize-html';
import Button from "@/components/Button/Button";

export const metadata = {
  title: "Lama Dev Contact Information",
  description: "This is Contact Page",
};

const Contact = () => {

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let name = e.target[0].value;
    let email = e.target[1].value;
    let content = e.target[2].value;

    name = sanitizeHtml(name);
    email = sanitizeHtml(email);
    content = sanitizeHtml(content.replace(/\n/g, '<br/>'));

    // Convert newline characters to HTML <br> tags
    content = content.replace(/\n/g, '<br/>');

    try {
      await fetch("/api/contacts", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          content,
        }),
      });
      e.target.reset()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>궁금한 사항이나 제안하실 것이 있다면 연락주세요.</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="메시지를 남겨주세요..."
            cols="30"
            rows="10"
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
