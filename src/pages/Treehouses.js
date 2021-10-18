import React from 'react'
import Description from '../components/treehouses/Description'
import Header from '../components/treehouses/Header'
import Pricing from '../components/treehouses/Pricing'
import Reviews from '../components/treehouses/Reviews'
import '../components/destinations/Header.css'


const Treehouses = () => {
    return (
        <>
            <Header />
            <Description />
            <Reviews />
            <Pricing />
        </>
    )
}

export default Treehouses
