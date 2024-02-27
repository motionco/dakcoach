import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/hero.png";
import Button from "@/components/Button/Button";
import Animation from "@/components/animation";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          A Better Choice for Your Tomorrow.
        </h1>
        <p className={styles.desc}>
          더 나은 미래를 위한 동행하는 친구. 당신의 성공을 위해 필요한 도움을 제공할 준비가 되어 있습니다.
          닥코치와 함께 성장해 나가요!
        </p>
        <Button url="/portfolio" text="See My Works" />
      </div>
      <div className={styles.item}>
        {/* <Image src={Hero} alt="" className={styles.img} /> */}
        <Animation className={styles.ani} />

      </div>
    </div>
  );
}
