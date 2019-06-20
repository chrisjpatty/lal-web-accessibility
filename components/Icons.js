import React, { useState } from 'react'
import FilterIcon from './FilterIcon'
import styled from '@emotion/styled'

export default () => {
  return (
    <Page>
      <Wrapper>
        <Button><FilterIcon/></Button>
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
  color: ${({theme}) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


const Button = styled('button')`
  width: 4vw;
  height: 4vw;
  padding: .6vw;
  background: ${({theme}) => theme.colors.background};
  color: #fff;
  font-size: 1vw;
  text-transform: uppercase;
  border: none;
  border-radius: .3vw;
  &:hover{
    opacity: .8;
  }
  &:active{
    opacity: 1;
  }
  svg{
    width: 2.1vw;
    height: 2.1vw;
    fill: #fff;
  }
`
