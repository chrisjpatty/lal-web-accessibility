import React from 'react'
import styled from '@emotion/styled'

export default ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
)

const Wrapper = styled('strong')({
  fontWeight: 'bold'
}, ({theme}) => ({
  color: theme.primary.color
}))
