import React from 'react';
import { CameraOutlined, UserAddOutlined } from '@ant-design/icons';
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
          Who's Using My Photo
        </div>
        <div className={styles.auth}>
          <button className={styles.loginBtn}><CameraOutlined /> Login</button>
          <button className={styles.signUpBtn}><UserAddOutlined /> Sign Up</button>
        </div>
      </header>
      <div className={styles.loginPage}>
        <div className={styles.loginSection}>
          <h1 className={styles.title}>HELLO!</h1>
          <p className={styles.subtitle}>sign in your account</p>
          <form className={styles.loginForm}>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Username" className={styles.input} />
            </div>
            <div className={styles.inputGroup}>
              <input type="password" placeholder="Password" className={styles.input} />
            </div>
            <button type="submit" className={styles.loginButton}>LOGIN</button>
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
