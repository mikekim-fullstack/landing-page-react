import React, { useState } from 'react'
import { HeroContainer, HeroBg, VideoBg } from './HeroElements'
import Video from '../../videos/video.mp4'
import { HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElement'
const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => setHover(!hover)
    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>E-learning & E-commerce Easy with Social Media</HeroH1>
                <HeroP>
                    Sign up for a new account today and try your content for 3 months free
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseLeave={onHover} onMouseEnter={onHover} primary='true' dark='true'
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >
                        <span>Get Started</span> {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection