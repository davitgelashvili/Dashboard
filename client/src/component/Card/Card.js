import React from 'react'
import styles from './Card.module.scss'
import CustomButton from '../CustomButton/CustomButton'

export default function Card({ item, children, cover, style }) {
  return (
    <div className={`${styles['card']}`}>
      <div className={`${styles['card__in']}`} style={style}>
        <figure className={`${styles['card__cover']}`}>
          <img src={item?.cover || cover.cover} alt='' className={`${styles['card__cover--img']}`} />
        </figure>
        {item?.title && (
          <h1 className={`${styles['card__title']}`}>
            {item?.title}
          </h1>
        )}
        {item?.fwd && (
          <div className={`${styles['card__dzravi']}`}>
            <div>{item?.fwd}</div>
            <div>{item?.kolofi}</div>
            <div>{item?.dzravi}</div>
          </div>
        )}
        {item?.body && (
          <div
            className={`${styles['card__body']}`}
            dangerouslySetInnerHTML={{
              __html: item.body.ka
            }}
          />
        )}
        {item?.price && (
          <div className={`${styles['card__price']} d-flex`}>
            <p>ფასი:</p>
            <CustomButton>
              {item?.price}
            </CustomButton>
          </div>
        )}
      </div>
      {children && children}
    </div>
  )
}
