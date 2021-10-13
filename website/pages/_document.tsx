import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

const _document = () => {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <div id="portal" />
        <NextScript />
      </body>
    </Html>
  )
}

export default _document
