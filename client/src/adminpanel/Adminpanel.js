import React, { useState } from 'react'
import { Route, Routes } from 'react-router'
import CarsPage from './page/cars/cars'
import AboutPage from './page/about/about'
import Sidebar from './components/Sidebar/Sidebar'

export default function Adminpanel() {
    const [isLogin, setIsLogin] = useState(true)

    return (
        <div className='adminpanel'>
            <div className='row'>
                <div className='col-auto'>
                    <Sidebar />
                </div>
                {!isLogin ? (
                    <Routes>
                        <Route path='/' element={<h1>login</h1>} />
                    </Routes>
                ) : (
                    <div className='col' style={{maxWidth: '100%'}}>
                        <Routes>
                            <Route path='/' element={<h1>dashboard</h1>} />
                            <Route path='/cars*' element={<CarsPage />} />
                            <Route path='/about*' element={<AboutPage />} />
                        </Routes>
                    </div>
                )}

            </div>
        </div>
    )
}
