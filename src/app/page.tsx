'use client'
import axios from 'axios';
import React, { useState, useRef, ChangeEvent } from 'react';
import Image from 'next/image';
import { CameraOutlined, UserOutlined } from '@ant-design/icons';
import styles from './page.module.css';
import searchImage from './search.png';
import titleImage from './title.png';
import Link from 'next/link';

interface ServerResponse {
  result: string; // Adjust the type based on the actual structure of 'result'
  // Add other properties if they exist in the server response
}

function Search() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedImageInfo, setUploadedImageInfo] = useState<string>('');
  const [showPicInfo, setShowPicInfo] = useState<boolean>(false);
  const [responseFromServer, setResponseFromServer] = useState<ServerResponse | null>(null);

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileUpload = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5005/upload-photo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data); // Log the response from the server

      // Update state to store the response in the component
      setResponseFromServer({ result: response.data.result });
    } catch (error) {
      console.error(error);
      // Handle errors during file upload
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && e.target.result) {
          const imageInfo = `Name: ${selectedFile.name}, Type: ${selectedFile.type}, Size: ${selectedFile.size} bytes`;
          setUploadedImageInfo(imageInfo);
          setShowPicInfo(true);
          handleFileUpload(selectedFile); // Call the function to upload the file
        }
      };

      reader.readAsDataURL(selectedFile);
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
          <Image src={titleImage} alt="Title Image" className={styles.title}/>
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
      <Image src={searchImage} alt="Search Image" className={styles.SearchImage} />
        </div>
      </div>
      <div className={styles.contentWrapper}>
      <div className={`${styles['pic-info']} ${showPicInfo ? styles['pic-info-visible'] : ''}`}>
      <div className={styles.imageInfo}>
        {uploadedImageInfo && <div className={styles.info}>{uploadedImageInfo}</div>}
    </div>
          <button className={styles['start-btn']}>Start</button>
    </div>
      </div>
      <div className={styles.contentWrapper}>
      <div className={`${styles['pic-info']} ${showPicInfo ? styles['pic-info-visible'] : ''}`}>
        <div className={styles.imageInfo}>
          {responseFromServer && responseFromServer.result && (
            <div className={styles.info}>
              {/* Display the 'result' data */}
              {responseFromServer.result}
            </div>
          )}
        </div>
</div>
    </div>
 
    </div>

  )
  
};

export default Search;