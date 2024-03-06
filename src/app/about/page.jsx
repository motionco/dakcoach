import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Friend Growing Together</h1>
          <h2 className={styles.imgDesc}>
            닥코치와 함께 당신의 디지털 능력 향상과 성장을 꿈꾸세요!
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Am I?</h1>
          <p className={styles.desc}>
            닥코치는 당신의 성장을 응원하는 친구입니다. 당신의 꿈과 목표를 함께 설정하고, 디지털 능력 성장을 위한 맞춤형 제작과 교육을 제공합니다.
            <br />
            <br />
            저는 삶과 일에서 다양한 실패과 성공을 겪어왔습니다. 그리고 저와 같은 상황에 있는 사람들을 격려하고 교육시켰습니다.
            강사와 진로 상담, 블로그 활동, 교육 영상 제작, 교육 사이트를 개발하면서 개인의 성장시키는 일에 관심을 갖고 20년이 넘는 시간을 보냈습니다.
            <br />
            <br />
            제 인생을 돌아보며 그 동안의 직업과 역할은 변화되었지만, 개인의 디지털 능력 성장과 더 나은 미래를 준비하는 사람들을 돕는 자리에 늘 있어왔습니다. 한 사람의 디지털 능력 성장과 성공을 돕는 것! 이것이 닥코치의 목표입니다. 당신의 목표는 무엇인가요? 지친 당신이 다시 힘을 얻고, 당신의 목표가 이루어질 때까지 닥코치가 함께하겠습니다.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What I Do?</h1>
          <p className={styles.desc}>
            닥코치는 개인 코칭, 그룹 워크숍, 온라인 교육 프로그램, 기업 컨설팅 등 다양한 형태의 교육 서비스를 제공합니다. 온라인과 오프라인 만남으로 어디서든 맞춤형 디지털 능력 성장 전략을 지원합니다. 공통 목표를 가진 사람들과 함께 효과적으로 학습하고 성장할 수 있도록 합니다. 창의적인 온라인 교육 프로그램으로 시간과 장소의 제약없이 자기개발을 할 수 있습니다. 개인과 기업 모두의 성장을 위해 맞춤형 교육 프로그램을 제공합니다.
            <br />
          </p>
          <h3 className={styles.subtitle}> 닥코치가 당신의 성장을 돕는 방법</h3>
          <p className={styles.desc}>
            맞춤형 코칭: 주제를 선정하고 개인의 상황, 학습 스타일에 맞춰 맞춤형 코칭을 제공해 효과적으로 디지털 능력 향상과 성공 목표를 이루게 돕습니다.
            <br />
            <br />
            교육 사이트: 다양한 교육 자료, 코칭 프로그램, 커뮤니티 등을 활용해 당신의 디지털 능력 성장을 위한 최적의 환경을 제공합니다.
            <br />
            <br />
            교육 동영상: 디지털 분야의 지식과 기술에 대한 동영상을 통해 미래의 성장과 성공에 대한 노하우를 배우고, 필요에 따로 직접 동영상을 제작하는 스킬도 알려드립니다.

          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
