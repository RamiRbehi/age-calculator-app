import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const AgeResult = ({ birthdate }) => {
    let years = '--';
    let months = '--';
    let days = '--';

    if (birthdate) {
        const now = new Date();
        const diff = now.getTime() - birthdate.getTime();
        years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * (365.25 / 12)));
        days = Math.floor((diff % (1000 * 60 * 60 * 24 * (365.25 / 12))) / (1000 * 60 * 60 * 24));
      }
  return (
    <Container>
            <Results>
                <ResultNumber>{years}</ResultNumber>
                <ResultName>years</ResultName>
            </Results>
            <Results>
                <ResultNumber>{months}</ResultNumber>
                <ResultName>months</ResultName>
            </Results>
            <Results>
                <ResultNumber>{days}</ResultNumber>
                <ResultName>days</ResultName>
            </Results>
    </Container>
  )
}

const Container = styled.div`
    font-family: 'Poppins-ExtraBoldItalic', sans-serif;
    font-size: 72px;
    padding-top: 30px;
    
    @media only screen and (max-width: 375px) {
        font-size: 62px;
    }
`
const Results = styled.div`
    display: flex;
    align-items: start;
    gap: 20px;
`
const ResultNumber = styled.span`
    color: hsl(259, 100%, 65%);
`
const ResultName = styled.p`
`

export default AgeResult