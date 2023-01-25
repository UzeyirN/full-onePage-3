import React from 'react'
import FlowerPricing from '../components/FlowerPricing/FlowerPricing'
import HeroSection from '../components/HeroSection/HeroSection'
import OurMission from '../components/OurMission/OurMission'
import OurTeam from '../components/OurTeam/OurTeam'
import { Helmet } from "react-helmet"

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <HeroSection />
            <OurMission />
            <FlowerPricing />
            <OurTeam />
        </>
    )
}

export default Home