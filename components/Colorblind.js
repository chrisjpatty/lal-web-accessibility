import React, { useState } from 'react'
import { useSteps } from '@mdx-deck/components'
import styled from '@emotion/styled'

export default () => {
  const step = useSteps(2)
  return (
    <Page>
      <Section style={{
        transform: `translateX(-${step === 1 ? 33.3333 : step === 2 ? 66.6666 : 0}%)`
      }}>
        <Wrapper>
          <Title>Normal Vision</Title>
          <FieldWrapper>
            <Label>Invalid field</Label>
            <Input type='text' invalid/>
          </FieldWrapper>
          <FieldWrapper>
            <Label>Valid field</Label>
            <Input type='text' valid/>
          </FieldWrapper>
          <Button>Submit</Button>
        </Wrapper>
      </Section>
      <Section style={{
        transform: `translateX(${step === 1 ? 33.3333 : step === 2 ? 0 : 0}%)`,
        opacity: step >= 1 ? 1 : 0
      }}>
        <Wrapper>
          <Title>Colorblind (Protanopia)</Title>
          <FieldWrapper>
            <Label>Invalid field</Label>
            <Input type='text' style={{borderColor: 'rgb(33, 37, 34)'}}/>
          </FieldWrapper>
          <FieldWrapper>
            <Label>Valid field</Label>
            <Input type='text' style={{borderColor: 'rgb(185, 159, 95)'}}/>
          </FieldWrapper>
          <Button>Submit</Button>
        </Wrapper>
      </Section>
      <Section style={{
        transform: `translateX(${step === 1 ? 33.3333 : step === 2 ? 66.6666 : 0}%)`,
        opacity: step >= 2 ? 1 : 0
      }}>
        <Wrapper>
          <Title>Accessible</Title>
          <FieldWrapper>
            <Label>Invalid field</Label>
            <div style={{position: 'relative'}}>
              <Input type='text' invalid/>
              <CrossMark>✕</CrossMark>
            </div>
          </FieldWrapper>
          <FieldWrapper>
            <Label>Valid field</Label>
            <div style={{position: 'relative'}}>
              <Input type='text' valid/>
              <CrossMark style={{color: 'rgb(55, 194, 27)'}}>✓</CrossMark>
            </div>
          </FieldWrapper>
          <Button>Submit</Button>
        </Wrapper>
      </Section>
    </Page>
  )
}

const Page = styled('section')`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
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
  position: relative;
`

const FieldWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  margin-bottom: 2vw;
  position: relative;
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
  border: .15vw solid ${({theme, valid, invalid}) => valid ? 'rgb(55, 194, 27)' : invalid ? 'rgb(231, 52, 52)' : theme.colors.background};
  border-radius: .3vw;
  padding: .2vw;
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
`

const ErrorMsg = styled('p')`
  color: rgb(227, 25, 25);
  font-size: .8vw;
  line-height: 1;
  font-style: italic;
  margin: 0px;
  margin-top: .5vw;
`

const Section = styled('section')`
  flex: 0 0 auto;
  width: 33.3333%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 1000ms, opacity 700ms;
  position: absolute;
  left: 33.3333333;
  top: 0;
`

const Title = styled('span')`
  position: absolute;
  width: 100%;
  left: 0;
  top: -2.5vw;
  color: #fff;
  text-align: center;
`

const CrossMark = styled('div')`
  font-weight: 800;
  position: absolute;
  right: 5%;
  bottom: 4.5%;
  color: rgb(227, 25, 25);
`
