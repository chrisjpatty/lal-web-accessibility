import React from 'react'
import styled from '@emotion/styled'

export default ({children}) => (
  <Wrapper>
    {children}
  </Wrapper>
)

const Wrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  > iframe{
    width: calc(100vw + 250px);
    height: 98vh;
    border: none;
    margin-left: -250px;
  }
`
