import React from 'react'
import Description from '../components/camels/Description'
import Header from '../components/camels/Header'
import Pricing from '../components/camels/Pricing'
import Reviews from '../components/camels/Reviews'
import '../components/destinations/Header.css'


const Camels = () => {
    return (
        <>
            <Header />
            <Description />
            <Reviews />
            <Pricing />
        </>
    )
}

export default Camels
