import PropTypes from 'prop-types'
import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import styled from '@emotion/styled'

import { graphql, useStaticQuery } from 'gatsby'

const StyledNavbar = styled(Navbar)`
  min-height: 4rem;
  background-color: ${props => props.theme.colors.darker};
`

const StyledBrand = styled(Navbar.Brand)`
  line-height: 31px;

  img {
    margin-right: 1rem;
  }
`

const propTypes = {
  activePage: PropTypes.string
}

function NavMain() {
  const { setting } = useStaticQuery(graphql`
    query {
      setting {
        url
        organization
        iconName
      }
    }
  `)

  return (
    <StyledNavbar as="header" variant="dark" role="banner" sticky="top">
      <Container>
        <StyledBrand href={setting.url}>
          <img
            src={require(`../assets/${setting.iconName}`)}
            alt="react-bootstrap"
            height={30}
          />
          {setting.organization}
        </StyledBrand>
      </Container>
    </StyledNavbar>
  )
}

NavMain.propTypes = propTypes

export default NavMain
