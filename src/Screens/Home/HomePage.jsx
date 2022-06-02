import React from 'react'
import MainText from '../../components/MainText/MainText'
import SocialIcons from '../../components/SocialIcons/SocialIcons'

import { MainContainer,Container } from '../../styles/HomePage.style'
import About from '../About/About'




const MainPage = () => {
  return (
    <>
      <MainContainer>
      
      <Container>
        <MainText/>
        
      </Container>
      
        
      
      <SocialIcons/>
    </MainContainer>
    <About/>
    </>
    
  )
}

export default MainPage