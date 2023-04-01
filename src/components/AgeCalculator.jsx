import React, { useState } from 'react'
import styled from 'styled-components'
import AgeForm from './AgeForm'
import AgeResult from './AgeResult'

const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState(null);

  return (
    <Container>
      <Wrapper>
        <AgeForm 
          setBirthdate={setBirthdate}
          />
        <AgeResult 
          birthdate={birthdate}
          />
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;

  @media only screen and (max-width: 375px) {
      height: 110vh;
    }
`
const Wrapper = styled.div`
    width: 60vw;
    height: 80vh;
    background-color: hsl(0, 0%, 100%);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 25%;
    padding: 30px;

    @media only screen and (max-width: 375px) {
      width: 80vw;
      height: 90vh;
    }
`

export default AgeCalculator