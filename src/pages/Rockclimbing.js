import React from 'react'
import Description from '../components/rockclimbing/Description'
import Header from '../components/rockclimbing/Header'
import Pricing from '../components/rockclimbing/Pricing'
import Reviews from '../components/rockclimbing/Reviews'
import '../components/destinations/Header.css'


const Rockclimbing = () => {
    return (
        <>
            <Header />
            <Description />
            <Reviews />
            <Pricing />
        </>
    )
}

export default Rockclimbing
