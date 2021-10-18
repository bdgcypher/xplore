import React from 'react'
import Description from '../components/peru/Description'
import Header from '../components/peru/Header'
import Pricing from '../components/peru/Pricing'
import Reviews from '../components/peru/Reviews'
import '../components/destinations/Header.css'


const Peru = () => {
    return (
        <>
            <Header />
            <Description />
            <Reviews />
            <Pricing />
        </>
    )
}

export default Peru
