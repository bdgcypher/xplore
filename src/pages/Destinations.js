import React from 'react'
import Camels from '../components/destinations/Camels'
import Header from '../components/destinations/Header'
import Rockclimbing from '../components/destinations/Rockclimbing'
import Subscribe from '../components/destinations/Subscribe'
import Treehouse from '../components/destinations/Treehouse'
import Van from '../components/destinations/Van'

const Destinations = () => {
    return (
        <>
            <Header />
            <Camels />
            <Treehouse />
            <Rockclimbing />
            <Van />
            <Subscribe />
        </>
    )
}

export default Destinations
