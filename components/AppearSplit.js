import React from 'react'
import styled from '@emotion/styled'
import { useSteps } from '@mdx-deck/components'

export default ({left, right}) => {
  const step = useSteps(2)
  console.log(left, right);
  return (
    <Wrapper>
      <Left>
        {
          step >= 1 && left
        }
      </Left>
      <Right>
        {
          step >= 2 && right
        }
      </Right>
    </Wrapper>
  )
}

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  height: '100vh',
  width: '100vw'
})

const Left = styled('div')({
  flex: '0 0 auto',
  width: '50%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

const Right = styled('div')({
  flex: '0 0 auto',
  width: '50%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})
