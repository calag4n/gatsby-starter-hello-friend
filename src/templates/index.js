import React from 'react'
import styled from 'styled-components'
<<<<<<< HEAD
import PropTypes from 'prop-types'
=======
>>>>>>> test
import SEO from '../components/seo'
import Layout from '../components/layout'

const Home = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 75vh;
`
<<<<<<< HEAD

const Hero = styled.div`
  /* tw('w-full xl:w-2/3')}; */
  width: 80%;
  margin: 4rem 0 3rem;
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 600px) {
    width: 75%;
    height: 65vh;
    margin: 0;
  }
`
const BigTitle = styled.h1`
  /* tw('text-5xl lg:text-6xl font-serif text-white mb-6 tracking-wide')}; */
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
  font-size: 4rem;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  /* color: white; */
  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`
const Subtitle = styled.p`
  /* tw('text-2xl lg:text-4xl font-sans text-white mt-8 xxl:w-3/4')}; */
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  font-size: 1.5rem;
  margin-top: 2rem;
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`

const Index = () => (
  <>
    <SEO />
    <Layout>
      <Home className='home'>
        <Hero>
          <BigTitle>
            Web Motion
            <br />
          </BigTitle>
          <Subtitle>
            Créateur de solutions web adaptées à chaque projet.
          </Subtitle>
        </Hero>
      </Home>
    </Layout>
  </>
)

Index.propTypes = {
  pageContext: PropTypes.shape({
    nextPagePath: PropTypes.string,
    previousPagePath: PropTypes.string,
  }),
}

=======

const Hero = styled.div`
  /* tw('w-full xl:w-2/3')}; */
  width: 80%;
  margin: 4rem 0 3rem;
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 600px) {
    width: 75%;
    height: 65vh;
    margin: 0;
  }
`
const BigTitle = styled.h1`
  /* tw('text-5xl lg:text-6xl font-serif text-white mb-6 tracking-wide')}; */
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
  font-size: 4rem;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  /* color: white; */
  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`
const Subtitle = styled.p`
  /* tw('text-2xl lg:text-4xl font-sans text-white mt-8 xxl:w-3/4')}; */
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  font-size: 1.5rem;
  margin-top: 2rem;
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`

const Index = () => (
  <>
    <SEO />
    <Layout>
      <Home className='home'>
        <Hero>
          <BigTitle>
            Web Motion
            <br />
          </BigTitle>
          <Subtitle>
            Créateur de solutions web adaptées à chaque projet.
          </Subtitle>
        </Hero>
      </Home>
    </Layout>
  </>
)

>>>>>>> test
export default Index
