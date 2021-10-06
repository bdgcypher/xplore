import React from 'react'
import styled from 'styled-components'
import Vid2 from '../videos/video2.mp4'
import { BtnSlide } from './Btn'

const Hero = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted playsInline src={Vid2} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroItems>
                    <HeroH1><b>Unbelievable</b> <b className="text-orange">Destinations</b> </HeroH1>
                    <HeroP>Out of this world</HeroP>
                    <HeroBtn primary={true} round={true} big={true}>See them all</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero

const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 1rem;
    position: relative;
    margin-top: -80px;
    color: #fff;
`;

const HeroBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
`;

const VideoBg = styled.video`
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #000;
    filter: brightness(30%);
    z-index: 2;
`;

const HeroContent = styled.div`
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 0rem calc((100vw - 1300px) / 2);
    z-index: 5;
`;

const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    max-height: 100%;
    padding: 0;
    color: #fff;
    line-height: 1.1;
    font-weight: bold;
`;

const HeroH1 = styled.h1`
    font-size: clamp(1.5rem, 6vw, 4rem);
    margin-bottom: .5rem;
    letter-spacing: 3px;
    padding: 0 1rem;
`;

const HeroP = styled.p`
    font-size: clamp(1rem, 3vw, 2rem);
    margin-bottom: 2rem;
    color: #DADAD9;
`;

const HeroBtn = styled(BtnSlide)`
  display: flex;
  align-items: center;
`;