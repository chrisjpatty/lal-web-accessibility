import React from 'react'
import { Prism } from 'react-syntax-highlighter'
import dark from 'react-syntax-highlighter/dist/esm/styles/prism/atom-dark';
import merge from 'lodash.merge'

const getLanguage = className => {
  const match = /language-(\w*)/.exec(className || 'language-javascript')
  let lang = 'javascript'
  if (match.length > 1) {
    lang = match[1]
  }
  return lang
}

export const pre = props => props.children

export const createCode = (opts = {}) => props => {
  const language = getLanguage(props.className)
  return <Prism {...opts} language={language} {...props} style={dark} />
}

export default theme =>
  merge(theme, {
    components: {
      pre,
      code: createCode(theme.prism),
    },
  })
