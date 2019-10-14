import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import ProjectCard from '../components/ProjectCard'


const Portfolio = () => {
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
              date
              path
              excerpt
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
      <h1>Page 2</h1>
      <div>
        {posts.map(({ node }) => {
          const {
            title,
            coverImage,
            path,
          } = node.frontmatter

          return (
            <ProjectCard
              key={title}
              title={title}
              coverImage={coverImage}
              path={path}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default Portfolio
