import React, { useState } from 'react'
import styled from '@emotion/styled'

export default ({interactive}) => {
  return (
    <Page>
      <Wrapper>
        <FieldWrapper>
          <Label>First Name</Label>
          <Input type='text'/>
        </FieldWrapper>
        <FieldWrapper>
          <Label>Last Name</Label>
          <Input type='text'/>
        </FieldWrapper>
        {
          interactive ?
          <Button>Submit</Button>
          :
          <FauxButton>Submit</FauxButton>
        }
      </Wrapper>
    </Page>
  )
}

const Page = styled('section')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Wrapper = styled('div')`
  width: 18vw;
  background: #fff;
  border-radius: .5vw;
  padding: 2vw;
  box-sizing: border-box;
  font-size: 1.4vw;
  text-align: left;
  color: ${({theme}) => theme.colors.background};
  display: flex;
  flex-direction: column;
`

const FieldWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  margin-bottom: 2vw;
  &:last-of-type{
    margin-bottom: 0px;
  }
`

const Label = styled('label')`
  margin: 0px;
  margin-top: -.5vw;
`

const Input = styled('input')`
  width: 100%;
  height: 4vh;;
  font-size: 1.3vw;
  border: .1vw solid ${({theme}) => theme.colors.background};
  border-radius: .3vw;
  padding: .2vw;
`

const FauxButton = styled('div')`
  width: 100%;
  padding: .6vw;
  background: ${({theme}) => theme.colors.background};
  color: #fff;
  font-size: 1vw;
  text-transform: uppercase;
  border: none;
  border-radius: .3vw;
  margin: 0px;
  margin-top: 0vw;
  text-align: center;
  cursor: default;
  user-select: none;
`

const Button = styled('button')`
  width: 100%;
  padding: .6vw;
  background: ${({theme}) => theme.colors.background};
  color: #fff;
  font-size: 1vw;
  text-transform: uppercase;
  border: none;
  border-radius: .3vw;
  margin-top: 2vw;
  font-family: ${({theme}) => theme.font}
`

const ErrorMsg = styled('p')`
  color: rgb(227, 25, 25);
  font-size: .8vw;
  line-height: 1;
  font-style: italic;
  margin: 0px;
  margin-top: .5vw;
`
