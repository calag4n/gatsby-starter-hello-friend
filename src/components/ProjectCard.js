import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import Techs from './Techs'

const Wrapper = styled(Link)`
  width: 100%;
  background: /* rgba(255, 255, 255, 0.2) */ ${props => props.bg};
  border: 2px solid ${props => props.primary};
  color: ${props => props.primary};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  text-shadow: 0 2px 10px ${props => props.shadow};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 30vw;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5),
    0 4px 6px -2px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  position: relative;
  border-radius: 0.5rem;
  padding: 2rem;
  margin: 2rem;

  @media (max-width: 900px) {
    max-width: 100%;
    
  }

  @media (max-width: 600px) {
    max-width: 95vw;
    padding: 0.7rem;
    margin: 1rem;
  }

  &:hover {
    transform: translateY(-5px);
  }
`

const Text = styled.div`
  font-size: 1rem;
`

const Title = styled.h2`
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 0.025em;
  padding-bottom: 0.5rem;
  justify-content: center;
`

const ImgContainer = styled.div`
  border: 1px solid ${props => props.primary};
  overflow: hidden;
  max-height: 200px;
  margin-bottom: 0.75rem;
  border-radius: 0.5rem;
`

const Image = styled(Img)`
  width: 100%;
  height: auto;
`

const ProjectCard = ({
  title,
  bg,
  primary,
  coverImage,
  imgAlt,
  shadow,
  techs,
  description,
  path,
}) => (
  <Wrapper
    bg={bg}
    primary={primary}
    shadow={shadow}
    to={path}
  >
    <Title>{title}</Title>
    <ImgContainer primary={primary}>
      {coverImage && (
        <Image fluid={coverImage.childImageSharp.fluid} alt={imgAlt} />
      )}
    </ImgContainer>
    <Text>
      {description}
      <br />
      <br />
      <Techs techs={techs} />
    </Text>
  </Wrapper>
)

export default ProjectCard

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  primary: PropTypes.string,
  coverImage: PropTypes.object,
  imgAlt: PropTypes.string,
  path: PropTypes.string,
  shadow: PropTypes.string,
  description: PropTypes.string,
}
