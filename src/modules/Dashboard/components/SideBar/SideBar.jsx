import React from 'react'
import styles from './SideBar.module.css';
import Avatar1 from '../../../../assets/Avatar1.png'
import DropDownArrow from '../../../../assets/DropDownArrow';

function SideBar() {
  return (
    <div className={styles.sideBar}>
      <div className={styles.userDetails}>
        <img className={styles.avatar} src={Avatar1} alt='Avatar'/>
        <div className={styles.nameDetails}>
          <p className={styles.nameTitle}>Intellisys</p>
          <p className={styles.followersCount}>12 members</p>
        </div>
        <div className=''>
          <DropDownArrow />
        </div>

      </div>
    </div>
  )
}

export default SideBar
