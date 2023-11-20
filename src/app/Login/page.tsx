import React from 'react';
import { CameraOutlined, LockOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons';
import styles from './page.module.css';
import Image from './login.png'; // Ensure the path to your image is correct

const LoginPage = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            <li className={styles.navItem}><a href="/about">About</a></li>
            <li className={styles.navItem}><a href="/help">Help</a></li>
          </ul>
        </nav>
        <div className={styles.logo}>
          Who is Using My Photo
        </div>
        <div className={styles.auth}>
          <button className={styles.signUpBtn}><UserAddOutlined /> Sign Up</button>
        </div>
      </header>
      <div className={styles.loginPage}>
        <div className={styles.loginSection}>
          <h1 className={styles.title}>HELLO!</h1>
          <p className={styles.subtitle}>sign in your account</p>
          <form className={styles.loginForm}>
          <div className={styles["input-section"]}>
            <div className={styles.icon}><UserOutlined style={{fontSize: '3vh', marginLeft:'1.5vh'}}/></div>
            <div className={styles["middle-line"]}>
              <div className={styles["small-line"]}></div>
              <div className={styles.line}></div>
              <div className={styles["small-line"]}></div>
            </div>
            <input type="username" className={styles.input} placeholder='Нэвтрэх нэрээ оруулна уу!'/>
          </div>
          <div className={styles["input-section"]}>
            <div className={styles.icon}><LockOutlined style={{fontSize: '3vh', marginLeft:'1.5vh'}}/></div>
            <div className={styles["middle-line"]}>
              <div className={styles["small-line"]}></div>
              <div className={styles.line}></div>
              <div className={styles["small-line"]}></div>
            </div>
            <input type="password" className={styles.input} placeholder='Нууц үгээ оруулна уу!'/>
          </div>
          <button className={styles["signup-btn"]}>SIGN UP</button>
          </form>
        </div>
        <div className={styles.imageSection}>
          {/* If you're using Next.js, use the Image component from 'next/image' */}
          <img src={Image.src} alt="Login" className={styles.loginImage} />
        </div>
      </div>
      <footer className={styles.footer}>
        © 2023 SeraMaa, Inc. All Rights Reserved. Do Not Sell Or Share My Personal Information
      </footer>
    </>
  );
};

export default LoginPage;