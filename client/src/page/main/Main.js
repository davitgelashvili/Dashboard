import React from 'react'
import MainSlider from '../../component/MainSlider/MainSlider'
import AboutUs from '../../component/AboutUs/AboutUs'
import Services from '../../component/Services/Services'
import Cars from '../../component/Cars/Cars'
import ProcessSteps from '../../component/ProcessSteps/ProcessSteps'

export default function MainPage() {
  return (
    <>
    <MainSlider />
    <AboutUs />
    <Cars />
    <Services />
    <ProcessSteps />
    </>
  )
}
