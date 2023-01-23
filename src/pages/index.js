import React, { useState } from 'react'
import Sidebar from '../components/SideBar'
import Navbar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { HomeObjOne, HomeObjTwo, HomeObjThree } from '../components/InfoSection/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'
const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...HomeObjOne} />
            <InfoSection {...HomeObjTwo} />
            <Services />
            <InfoSection {...HomeObjThree} />
            <Footer />
        </>
    )
}

export default Home