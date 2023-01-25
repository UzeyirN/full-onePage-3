import React from 'react'
import FlowerPricing from '../components/FlowerPricing/FlowerPricing'
import HeroSection from '../components/HeroSection/HeroSection'
import OurMission from '../components/OurMission/OurMission'
import OurTeam from '../components/OurTeam/OurTeam'

const Home = () => {
    return (
        <div>
            <HeroSection />
            <OurMission />
            <FlowerPricing />
            <OurTeam />
        </div>
    )
}

export default Home