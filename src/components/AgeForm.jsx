import React, { useState } from 'react'
import styled from 'styled-components'
import '../App.css'

const AgeForm = ({setBirthdate}) => {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [isEmptyInput, setIsEmptyInput] = useState(false);
    const [isInvalidDay, setIsInvalidDay] = useState(false);
    const [isInvalidMonth, setIsInvalidMonth] = useState(false);
    const [isInvalidYear, setIsInvalidYear] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!day || !month || !year) {
          setBirthdate(null);
          setIsEmptyInput(true);
          setIsInvalidDay(false);
          setIsInvalidMonth(false);
          setIsInvalidYear(false);
          return;
        }
    
        const birthdate = new Date(`${year}-${month}-${day}`);
        const today = new Date();
        const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    
        setIsEmptyInput(false);
        setIsInvalidDay(false);
        setIsInvalidMonth(false);
        setIsInvalidYear(false);
    
        if (isNaN(birthdate.getTime()) || birthdate > today) {
          setBirthdate(null);
          setIsInvalidYear(true);
        } else if (birthdate > maxDate) {
          setBirthdate(null);
          setIsInvalidYear(true);
        } else if (birthdate.getDate() !== parseInt(day)) {
          setBirthdate(null);
          setIsInvalidDay(true);
        } else {
          setBirthdate(birthdate);
        }
      };


      const handleDayChange = (e) => {
        const value = e.target.value;
    
        if (value < 0 || value > 31) {
          setIsInvalidDay(true);
        } else {
          setIsInvalidDay(false);
          setDay(value);
        }
      };
    
      const handleMonthChange = (e) => {
        const value = e.target.value;
    
        if (value < 0 || value > 12) {
          setIsInvalidMonth(true);
        } else {
          setIsInvalidMonth(false);
          setMonth(value);
        }
      };
    
      const handleYearChange = (e) => {
        const value = e.target.value;
    
        if (value < 0 || value > new Date().getFullYear()) {
          setIsInvalidYear(true);
        } else {
          setIsInvalidYear(false);
          setYear(value);
        }
      };
    
    return (
    <Container>
        <FormContainer onSubmit={handleSubmit}>
        <Form>
            <Label htmlFor='day'>DAY</Label>
            <Input style={{ borderColor: isEmptyInput && !day || isInvalidDay ? "hsl(0, 100%, 67%)" : "hsl(0, 0%, 86%)" }}
             type='number'
              id='day'
              placeholder='DD'
              value={day} 
              onChange={handleDayChange}/>
            {isEmptyInput && !day && (
            <ErrorMessage>This field is required</ErrorMessage>
          )}
          {isInvalidDay && (
            <ErrorMessage>Must be a valid day</ErrorMessage>
          )}
        </Form>

        <Form onSubmit={handleSubmit}>
            <Label htmlFor='month'>MONTH</Label>
            <Input style={{ borderColor: isEmptyInput && !month || isInvalidMonth ? "hsl(0, 100%, 67%)" : "hsl(0, 0%, 86%)" }} 
            type='number' 
            id='month' 
            placeholder='MM' 
            value={month} 
            onChange={handleMonthChange}/>
            {isEmptyInput && !month && (
            <ErrorMessage>This field is required</ErrorMessage>
          )}
          {isInvalidMonth && (
            <ErrorMessage>Must be a valid month</ErrorMessage>
          )}
        </Form>

        <Form onSubmit={handleSubmit}>
            <Label htmlFor='year'>YEAR</Label>
            <Input style={{ borderColor: isEmptyInput && !year || isInvalidYear ? "hsl(0, 100%, 67%)" : "hsl(0, 0%, 86%)" }} 
            type='number' 
            id='year' 
            placeholder='YYYY' 
            value={year} 
            onChange={handleYearChange}/>
            {isEmptyInput && !year && (
            <ErrorMessage>This field is required</ErrorMessage>
          )}
          {isInvalidYear && (
            <ErrorMessage>Must be a valid year</ErrorMessage>
          )}
        </Form>
        </FormContainer>

        <ButtonContainer>
        <Line/>
        <Button onClick={handleSubmit}>
        <ArrowIcon xmlns='/assets/images/icon-arrow.svg'  width="46" height="44" viewBox="0 0 46 44" aria-label='arrow-icon'>
            <g fill="none" stroke="#FFF" strokeWidth="2">
            <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/>
            </g>
        </ArrowIcon>
        </Button>
        </ButtonContainer>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const FormContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 10px;
`
const Label = styled.label`
    font-family: 'Poppins-Bold', sans-serif;
    color: hsl(0, 1%, 44%);
    letter-spacing: 4px;
`
const Input = styled.input`
    padding: 5px;
    width: 150px;
    border: solid 1px;
    border-radius: 5px;
    font-family: 'Poppins-Bold', sans-serif;
    font-size: 32px;
    caret-color: hsl(259, 100%, 65%);

    &:focus{
        outline: none;
        border-color: hsl(259, 100%, 65%); 
    }

    @media only screen and (max-width: 375px) {
      width: 80px;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    position: relative;
    
`
const Line = styled.hr`
    width: 80%;
    border: 1px solid hsl(0, 0%, 86%);
    overflow: visible;
    text-align: center;
    margin-top: 40px;

    @media only screen and (max-width: 375px) {
        width: 100%;
    }
`
const Button = styled.div`
    background-color: hsl(259, 100%, 65%);
    width: 90px;
    height: 90px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    top: 0px;
    right: 100px;

    &:hover{
        background-color: hsl(0, 0%, 8%);
    }
    
    @media only screen and (max-width: 375px) {
        width: 70px;
        height: 70px;
        right: 120px;
    }
` 
const ArrowIcon = styled.svg`
`
const ErrorMessage = styled.span`
    color: hsl(0, 100%, 67%);
    font-family: 'Poppins-Italic', sans-serif;
    font-size: 12px;
`

export default AgeForm