import React, { useState } from 'react'
import styled from 'styled-components'
import AgeForm from './AgeForm'
import AgeResult from './AgeResult'

const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState(null);

  // const handleDayChange =(event) => {
  //   setDay(event.target.value);
  // }
  // const handleMonthChange =(event) => {
  //   setMonth(event.target.value);
  // }
  // const handleYearChange =(event) => {
  //   setYear(event.target.value);
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const birthDate = new Date(`${year}-${month}-${day}`);
  //   if (birthDate.toString() !== 'Invalid Date') {
  //     const today = new Date();
  //     const diffTime = Math.abs(today - birthDate);
  //     const diffYear = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
  //     const diffMonth = Math.floor(
  //      ( diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
  //     );
  //     const diffDays = Math.floor(
  //       ((diffTime % (1000 * 60 * 60 * 24 * 365)) % (1000 * 60 * 60 * 24 * 30)) /
  //         (1000 * 60 * 60 * 24)
  //     );
  //     setResultYears('--');
  //     setResultMonths('--');
  //     setResultDays('--');
  //   }
  // };

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