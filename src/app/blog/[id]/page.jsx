import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
import sanitizeHtml from 'sanitize-html';

// export const dynamic = "force-dynamic";

async function getData(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}`
    // , {
    //   cache: "no-store",
    // }
  );


  if (!res.ok) {
    return notFound()
  }

  return res.json();
}


export async function generateMetadata({ params }) {

  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  let data = await getData(params.id);

  data = {
    ...data,
    title: sanitizeHtml(data.title),
    desc: sanitizeHtml(data.desc),
    img: sanitizeHtml(data.img),
    content: sanitizeHtml(data.content),
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            {data.desc}
          </p>
          <div className={styles.author}>
            <Image
              src={data.img}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={data.img}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text} dangerouslySetInnerHTML={{ __html: data.content }} />
      </div>
    </div>
  );
};

export default BlogPost;
