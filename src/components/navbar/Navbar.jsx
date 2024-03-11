"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session = useSession();
  const [isActive, setIsActive] = useState(false); // 햄버거 메뉴 상태

  const toggleMenu = () => {
    setIsActive(!isActive); // 메뉴 토글
  };

  // 링크 클릭시 메뉴 닫기 기능 추가
  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Dakcoach
      </Link>
      <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`${styles.links} ${isActive ? styles.active : ''}`}>
        <DarkModeToggle />
        {links.map((link) => (
          <div onClick={closeMenu} key={link.id}> {/* 메뉴 닫기 기능을 위한 div 추가 */}
            <Link key={link.id} href={link.url} className={styles.link}>
              {link.title}
            </Link>
          </div>
        ))}
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
