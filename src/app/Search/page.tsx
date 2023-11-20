'use client'
import React, { useState, useRef } from "react";
import { CameraOutlined, UserOutlined } from '@ant-design/icons';
import styles from './page.module.css';
import Image from './search.png';

function SearchPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      console.log(file); // Do something with the file
    }
  };

  return(

<div className={styles.container}>
      <div   className={styles.header}>
        <div className={styles.con01}>
          <button className={styles.btn01}>About</button>
          <button className={styles.btn02}>Help</button>
        </div>
        <div className={styles["title-section"]}>
          <div className={styles.title01}>Who is using</div>
          <div className={styles.con02}>
            <CameraOutlined style={{marginRight:'5px'}}/>
            <div className={styles.title02}>your picture?</div>
          </div>
        </div>
        <div className={styles.con03}>
        <UserOutlined style={{ fontSize: '24px', marginRight: '4%', color: 'white' }} />
        <div className={styles.user}>Jennie Kim</div>
        </div>
      </div>
        <div className={styles.container02}>
        <div className={styles.content}>
          <div className={styles.heading01}>
          Use our platform to find 
          </div>
          <div className={styles.heading02}>
            someone using your photos.
          </div>
            <button type="button" className={styles.photoButton} onClick={handleIconClick}>

            Choose your photo
            <CameraOutlined style={{fontSize: '24px', marginLeft: '8%', color: 'black' }} /> 
          </button>
          <input
        ref={fileInputRef}
        type="file"
        className={styles.fileInput}
        onChange={handleFileChange}
        accept="image/*" 
      />
        </div>
      <div className={styles.imageContainer}>
          <img src={Image.src} alt="search image" className={styles.SearchImage} />
        </div>
      </div>
      <footer className={styles.footer}>
        © 2023 SeraMaa, Inc. All Rights Reserved. Do Not Sell Or Share My Personal Information
      </footer>
    </div>

  )
  
};

export default SearchPage;