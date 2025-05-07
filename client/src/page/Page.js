import React from 'react'
import Header from '../component/common/Header/Header'
import { Route, Routes } from 'react-router'
import MainPage from './main/Main'
import CarsPage from './cars/Cars'

export default function Page() {
  return (
    <>
    <Header />
    <div className='content'>
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/cars' element={<CarsPage />} />
        </Routes>
    </div>
    </>
  )
}
