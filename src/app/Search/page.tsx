'use client'
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { CameraOutlined, UserOutlined } from '@ant-design/icons';
import styles from './page.module.css';
// import searchImage from './search.png';
// import titleImage from './title.png';
//import { useRouter } from 'next/router';

function Search() {
  // const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedImageInfo, setUploadedImageInfo] = useState<string>("");
  const [showPicInfo, setShowPicInfo] = useState<boolean>(false);

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && e.target.result) {
          const imageInfo = `Name: ${file.name}, Type: ${file.type}, Size: ${file.size} bytes`;
          setUploadedImageInfo(imageInfo);
          setShowPicInfo(true);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // const handleStartButtonClick = () => {
  //   router.push('/Result'); // Navigate to the '/Result' path
  // };
  return(

<div className={styles.container}>
      <div   className={styles.header}>
        <div className={styles.con01}>
          <button className={styles.btn01}>About</button>
          <button className={styles.btn02}>Help</button>
        </div>
        <div className={styles["title-section"]}>
          {/* <Image src={titleImage} alt="Title Image" className={styles.title}/> */}
        </div>
        <div className={styles.con03}>
        <UserOutlined style={{ fontSize: '30px', marginRight: '4%', color: 'white' }} />
        <div className={styles.user}>Username</div>
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
      {/* <Image src={searchImage} alt="Search Image" className={styles.SearchImage} /> */}
        </div>
      </div>
      <div className={styles.contentWrapper}>
      <div className={`${styles['pic-info']} ${showPicInfo ? styles['pic-info-visible'] : ''}`}>
      <div className={styles.imageInfo}>
        {uploadedImageInfo && <div className={styles.info}>{uploadedImageInfo}</div>}
    </div>
    <button className={styles['start-btn']} ></button>
    </div>
      </div>
      <footer className={styles.footer}>
        © 2023 SeraMaa, Inc. All Rights Reserved. Do Not Sell Or Share My Personal Information
      </footer>
    </div>

  )
  
};

export default Search;