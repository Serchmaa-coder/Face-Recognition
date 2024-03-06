'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import { UserOutlined } from '@ant-design/icons';
import titleImage from '../title.png';
import Image from 'next/image';

const ResultPage = () => {


  return (
    <div className={styles.container}>
       <div   className={styles.header}>
        <div className={styles.con01}>
          <button className={styles.btn01}>About</button>
          <button className={styles.btn02}>Help</button>
        </div>
        <div className={styles["title-section"]}>
          <Image src={titleImage} alt="Title Image" className={styles.title}/>
        </div>
        <div className={styles.con03}>
        <UserOutlined style={{ fontSize: '30px', marginRight: '4%', color: 'white' }} />
        <div className={styles.user}>Username</div>
        </div>
      </div>

     <div className={styles['small-container']}>
      <div className={styles['uplouded-photo']}>
        <div className={styles.text}>User</div>
        <div className={styles.pic}>


        </div>
      </div>
      <div className={styles.result}>
      <div className={styles.text}>Result</div>
        <div className={styles.pic}>

        </div>
      </div>
     </div>

      <footer className={styles.footer}>
        <span className={styles.footerText}>© 2023 SeraMaa, Inc. All Rights Reserved. Do Not Sell Or Share My Personal Information</span>
      </footer>
    </div>
  );
};

export default ResultPage;
