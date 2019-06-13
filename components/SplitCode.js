import React from 'react'
import styled from '@emotion/styled'
import { Prism } from 'react-syntax-highlighter'
import dark from 'react-syntax-highlighter/dist/esm/styles/prism/atom-dark';
import ColumnContainer from './ColumnContainer'

export default ({code, language='jsx', html, ...props}) => {

  return (
    <Wrapper>
      <ColumnContainer>
        <Prism language={language} {...props} style={dark}>
          {code}
        </Prism>
      </ColumnContainer>
      <ColumnContainer>
        <Html dangerouslySetInnerHTML={{__html: html}} />
      </ColumnContainer>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  width: 100vw;
  pre{
    background: none !important;
    font-size: 34px;
    padding: 15px !important;
  }
`

const Html = styled('div')`
  background: #fff;
  width: 100%;
  height: 100%;
`
