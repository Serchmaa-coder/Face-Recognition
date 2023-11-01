'use client'
import { CameraOutlined, UserAddOutlined } from '@ant-design/icons';
import styles from './page.module.css';


import React, { useState } from "react";
export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.con01}>
          <button className={styles.btn01}>About</button>
          <button className={styles.btn02}>Help</button>
        </div>
        <div className={styles["title-section"]}>
          <div className={styles.title01}>Who is using</div>
          <div className={styles.title01}>    my photo?</div>
          <div className={styles.con02}>
            <CameraOutlined className={styles["title-icon"]} />
          </div>   
        </div>

        <button className={styles["login-btn01"]}>Login</button>
        <button className={styles.btn02}>Sign in</button>
      </div>

      <div>
        <div className={styles.loginTitle01}>HELLO!</div>
        <div className={styles.loginTitle02}>sign in your account</div>
        </div>
      <div className={styles.body}>
        <UserAddOutlined className={styles.icon} />
        <input className={styles["username-input"]} placeholder='Username'></input>
        <input className={styles["password-input"]} placeholder='Password' type="password"></input>
        <button className={styles["login-btn02"]}>LOGIN</button>
      </div>
    <div>
        <div className={styles.footer}>© 2023 SeraMaa, Inc. All Rights Reserved. Do Not Sell Or Share My Personal Information</div>

    </div>

    </div>
    
  );

}

