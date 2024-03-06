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
          더 나은 미래를 위해 동행하는 친구, 닥코치입니다. 디지털로 이루어진 현재 세상과 AI 미래 기술앞에서 당신은 어떤 선택을 하실 건가요? 디지털 능력의 향상과 미래의 성장을 꿈꾸는 여러분들을 위해 필요한 도움을 제공해 드리겠습니다. 닥코치와 함께해 보세요.
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
