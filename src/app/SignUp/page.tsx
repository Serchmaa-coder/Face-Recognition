'use client'
import { CalendarOutlined, CameraOutlined, CameraTwoTone, CheckCircleOutlined, LockOutlined, MailOutlined, UserAddOutlined, UserOutlined, WomanOutlined } from '@ant-design/icons';
import styles from './page.module.css';
import React, { useState } from "react";
import { DatePicker, DatePickerProps, Space } from 'antd';
export default function SignUp() {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };
  const [selectedOption, setSelectedOption] = useState('');

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };
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
            <CameraOutlined style={{marginRight:'5px'}}/>
            <div className={styles.title02}>your picture?</div>
          </div>
        </div>
        <button className={styles["login-btn"]}>Login</button>
      </div>
      <div className={styles["body-section"]}>
        <UserAddOutlined style={{
         fontSize:'15vh', 
         alignSelf: 'center'
        }}/>
        <div className={styles.form}>
          <div className={styles["input-section"]}>
            <div className={styles.icon}><UserOutlined style={{fontSize: '3vh', marginLeft:'1.5vh'}}/></div>
            <div className={styles["middle-line"]}>
              <div className={styles["small-line"]}></div>
              <div className={styles.line}></div>
              <div className={styles["small-line"]}></div>
            </div>
            <input type="last-name" className={styles.input} placeholder='Овгоо оруулна уу!'/>
          </div>
          <div className={styles["input-section"]}>
            <div className={styles.icon}><UserOutlined style={{fontSize: '3vh', marginLeft:'1.5vh'}}/></div>
            <div className={styles["middle-line"]}>
              <div className={styles["small-line"]}></div>
              <div className={styles.line}></div>
              <div className={styles["small-line"]}></div>
            </div>
            <input type="first-name" className={styles.input} placeholder='Нэрээ оруулна уу!'/>
          </div>
          <div className={styles.DOB}>
            <div className={styles.icon}>
              <CalendarOutlined style={{fontSize: '3vh', marginLeft:'1.5vh'}} />
            </div>
            <div className={styles["middle-line"]}>
              <div className={styles["small-line"]}></div>
              <div className={styles.line}></div>
              <div className={styles["small-line"]}></div>
            </div>
            <Space direction="vertical">
              <DatePicker onChange={onChange} className={styles["date-picker"]} placeholder='Төрсөн он/сар/өдрөө оруулна уу!'/>
              </Space>
          </div>
          <div className={styles["input-section"]}>
            <div className={styles.icon}><CheckCircleOutlined style={{fontSize: '3vh', marginLeft:'1.5vh'}}/></div>
            <div className={styles["middle-line"]}>
              <div className={styles["small-line"]}></div>
              <div className={styles.line}></div>
              <div className={styles["small-line"]}></div>
            </div>
            <div className={styles.gender}>
              <div className={styles.checkbox}>
              <label>
                <input
                type="checkbox"
                value="man"
                checked={selectedOption === 'man'}
                onChange={handleCheckboxChange}/>
                Эрэгтэй
                </label>
              </div>
              <div className={styles.checkbox}>
              <label>
                  <input
                  type="checkbox"
                  value="woman"
                  checked={selectedOption === 'woman'}
                  onChange={handleCheckboxChange}/>
                  Эмэгтэй
                  </label>
              </div>
               <div className={styles.checkbox}>
               <label>
                  <input
                  type="checkbox"
                  value="other"
                  checked={selectedOption === 'other'}
                  onChange={handleCheckboxChange}/>
                  Бусад
                </label>
               </div>
               </div>
               </div>
          <div className={styles["input-section"]}>
            <div className={styles.icon}><MailOutlined style={{fontSize: '3vh', marginLeft:'1.5vh'}}/></div>
            <div className={styles["middle-line"]}>
              <div className={styles["small-line"]}></div>
              <div className={styles.line}></div>
              <div className={styles["small-line"]}></div>
            </div>
            <input type="email" className={styles.input} placeholder='Имайл хаягаа оруулна уу!'/>
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
          <div className={styles["input-section"]}>
            <div className={styles.icon}><LockOutlined style={{fontSize: '3vh', marginLeft:'1.5vh'}}/></div>
            <div className={styles["middle-line"]}>
              <div className={styles["small-line"]}></div>
              <div className={styles.line}></div>
              <div className={styles["small-line"]}></div>
            </div>
            <input type="password-confirm" className={styles.input} placeholder= 'Нууц үгээ давтан оруулна уу!'/>
          </div>
        </div>
        <button className={styles["signup-btn"]}>SIGN UP</button>
      </div>
    </div>
  );
}
