import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProjectCard from '../components/ProjectCard'
import H1 from '../components/H1'

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 2rem;

  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const page2 = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "//posts//" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id
            excerpt
            frontmatter {
              title
              link
              date
              path
              bg
              excerpt
              primary
              imgAlt
              shadow
              tech
              coverImage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const {
    allMarkdownRemark: { edges: posts },
  } = data

  return (
    <Layout>
      <SEO title='Portfolio' description='Quelques exemples de mon travail.' />
      <H1>Page 2</H1>
      <ProjectsWrapper>
        {posts.map(({ node }) => {
          const {
            title,
            link,
            // eslint-disable-next-line no-unused-vars
            bg,
            primary,
            coverImage,
            imgAlt,
            shadow,
            tech,
            path,
          } = node.frontmatter

          return (
            <ProjectCard
              key={title}
              title={title}
              link={link}
              bg='#202020'
              primary={primary}
              coverImage={coverImage}
              imgAlt={imgAlt}
              shadow={shadow}
              techs={tech}
              path={path}
            />
          )
        })}
      </ProjectsWrapper>
    </Layout>
  )
}

export default page2
