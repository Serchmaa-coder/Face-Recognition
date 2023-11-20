import React from 'react';
import styles from './page.module.css';
import { CameraOutlined, UserOutlined } from '@ant-design/icons';

// Correctly import images (this assumes that you're using webpack or Create React App)
import ProfileImage from './Jennie1.png';
import UserImage from './Jennie2.png';

const ResultPage = () => {
  // Placeholder data - replace with real data as needed
  const users = new Array(8).fill({ name: 'Malena', image: UserImage });

  return (
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
      <div className={styles.resultsHeading}>Hey! 8 people are using your photo on Instagram</div>
      <main className={styles.mainContent}>
        <section className={styles.profileSection}>
          <img src={ProfileImage.src} alt="Profile" className={styles.profileImage} />
          <div className={styles.profileText}>Jennie Kim, Your Profile</div>
        </section>
        <div className={styles.resultsSection}>
          <ul className={styles.userList}>
            {users.map((user, index) => (
              <li key={index} className={styles.userItem}>
                <img src={UserImage.src} alt={user.name} className={styles.userImage} />
                <div className={styles.userName}>{user.name}</div>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <footer className={styles.footer}>
        <span className={styles.footerText}>© 2023 SeraMaa, Inc. All Rights Reserved. Do Not Sell Or Share My Personal Information</span>
      </footer>
    </div>
  );
};

export default ResultPage;
