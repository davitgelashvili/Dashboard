import React from 'react'
import styles from './MainSlider.module.scss'
import CustomButton from '../CustomButton/CustomButton'

export default function MainSlider() {
  return (
    <div className={styles.slider}>
        <div className='container'>
            <div className={styles.slider__container}>
                <h1>სათაური</h1>
                <h3>ინფორმაცია საიტზე</h3>
                <button className={`${styles['slider__btn']}`}>
                    <CustomButton>
                    მანქანის შერჩევა
                    </CustomButton>
                </button>
            </div>
        </div>
    </div>
  )
}
