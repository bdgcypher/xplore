import React from 'react'
import Description from '../components/van/Description'
import Header from '../components/van/Header'
import Pricing from '../components/van/Pricing'
import Reviews from '../components/van/Reviews'
import '../components/destinations/Header.css'


const Van = () => {
    return (
        <>
            <Header />
            <Description />
            <Reviews />
            <Pricing />
        </>
    )
}

export default Van
