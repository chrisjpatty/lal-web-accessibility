import React from 'react'
import styled from '@emotion/styled'

export default ({src, width}) => (
  <Image src={src} cssWidth={width} />
)

const Image = styled('img')(({cssWidth}) => ({
  width: cssWidth || '100%'
}))
