import React, { useState } from 'react'
import styled from '@emotion/styled'

export default () => {
  return (
    <Page>
      <Wrapper>
        <Label>We've got something cool</Label>
        <Button>Check it out here</Button>
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
  width: 20vw;
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

const Button = styled('button')`
  width: 100%;
  padding: .6vw;
  background: ${({theme}) => theme.colors.background};
  color: #fff;
  font-size: 1vw;
  text-transform: uppercase;
  border: none;
  border-radius: .3vw;
  margin-top: 1vw;
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
