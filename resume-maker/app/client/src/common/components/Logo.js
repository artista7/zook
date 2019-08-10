/**
 * @flow
 */

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../theme'

const Text = styled.h1`
  font-family: NexaBold;
  font-size: ${props => (props.big ? 6 : 2.5)}em;
  margin: 0;
`

const StyledLink = styled(Link)`
  text-transform: lowercase;
  text-decoration: none;
  color: white;
`

const Accent1 = styled.em`
  font-style: normal;
  color: ${colors.primary};
`
const Accent2 = styled.em`
  font-style: normal;
  color: ${colors.secondary};
`

type Props = {
  big?: boolean
}

function Logo({ big }: Props) {
  return (
    <Text big={big}>
      <StyledLink to="/">
        <Accent1>Zo</Accent1><Accent2>ok</Accent2>
      </StyledLink>
    </Text>
  )
}

export default Logo
