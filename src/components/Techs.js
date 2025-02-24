import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const LogosWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 0.3em;

  & :first-child {
    width: 100%;
    margin-bottom: 0.5em;
  }
`

const ImgLogo = styled(Img)`
  height: 2rem;
  width: 2rem;
  margin-bottom: 0.3em;
`

const Techs = ({ techs }) => {
  const data = useStaticQuery(graphql`
    query logosQuery {
      bootstrap: file(relativePath: { eq: "techs/bootstrap.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      css3: file(relativePath: { eq: "techs/css3.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      firebase: file(relativePath: { eq: "techs/firebase.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      gatsby: file(relativePath: { eq: "techs/gatsby.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      html5: file(relativePath: { eq: "techs/html5.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      jquery: file(relativePath: { eq: "techs/jquery.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      js: file(relativePath: { eq: "techs/js.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      lambda: file(relativePath: { eq: "techs/lambda.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      maps: file(relativePath: { eq: "techs/maps.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      netlify: file(relativePath: { eq: "techs/netlify.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      react: file(relativePath: { eq: "techs/react.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      stripe: file(relativePath: { eq: "techs/stripe.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      styledComponent: file(relativePath: { eq: "techs/styledComponent.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      zapier: file(relativePath: { eq: "techs/zapier.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  let technos = []

  if (typeof techs === 'string') {
    technos = techs.split(',')
  } else {
    technos = techs
  }
  const logosBase = {}

  const logosNames = Object.keys(data)

  logosNames.forEach(logosName => {
    logosBase[logosName] = {}
    logosBase[logosName].logo = data[logosName].childImageSharp.fluid
    logosBase[logosName].title = logosName
    logosBase[logosName].alt = `Logo ${logosName}`
  })

  return (
    <LogosWrapper>
      <span className='text'>Technologies utilisées :</span>{' '}
      {technos.map((tech, index) => (
        <ImgLogo
          fluid={logosBase[tech].logo}
          alt={logosBase[tech].alt}
          title={logosBase[tech].title}
          key={index}
        />
      ))}
    </LogosWrapper>
  )
}

Techs.propTypes = {
  techs: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
}

export default Techs
