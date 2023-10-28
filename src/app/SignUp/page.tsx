'use client'
import { CameraOutlined, CameraTwoTone, UserAddOutlined, WomanOutlined } from '@ant-design/icons';
import styles from './page.module.css';


import React, { useState } from "react";
export default function SignUp() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.con01}>
          <button className={styles.btn01}>About</button>
          <button className={styles.btn02}>Help</button>
        </div>
        <div className={styles["title-section"]}>
          <div className={styles.title01}>Who is using</div>
          <div className={styles.con02}>
            <CameraOutlined className={styles["title-icon"]}/>
            <div className={styles.title02}>your picture?</div>
          </div>
        </div>
        <button className={styles["login-btn"]}>Login</button>
      </div>
      <div className={styles.body}>
        <UserAddOutlined className={styles.icon}/>
        <input className={styles["last-name"]} placeholder='Last Name'></input>
      </div>
      
    </div>
  );
}
