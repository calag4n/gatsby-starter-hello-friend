import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Title = styled.h1`
  flex-grow: 0.2;
  @media (max-width: 600px) {
    justify-content: center;
  }
`

const H1 = ({ children }) => <Title>{children}</Title>

H1.propTypes = {
  children: PropTypes.node.isRequired,
}

export default H1
