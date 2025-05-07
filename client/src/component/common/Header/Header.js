import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import CustomButton from '../../CustomButton/CustomButton'
import logo from './../../../logo.png'

export default function Header() {
  return (
    <header className={`${styles['header']}`}>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <Link to={'/'} className={`${styles['header__logo']}`}>
              <img src={logo} alt='logo' />
            </Link>
          </div>
          <div className='col-6 d-flex justify-content-end align-items-center'>
            <button className={`${styles['header__call']}`}>
              <CustomButton>დაგვირეკე</CustomButton>
            </button>
            <select>
              <option>ge</option>
              <option>en</option>
              <option>rus</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  )
}
