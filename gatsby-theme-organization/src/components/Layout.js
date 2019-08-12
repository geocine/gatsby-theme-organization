import React from 'react'
import { Layout as ThemeLayout, Main } from 'theme-ui'
import NavMain from './NavMain'

import '../css/theme.scss'

const Layout = ({ children }) => {
  return (
    <ThemeLayout>
      <NavMain />
      <Main>{children}</Main>
    </ThemeLayout>
  )
}

export default Layout
