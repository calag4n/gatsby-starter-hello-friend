import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import ProjectCard from '../components/ProjectCard'

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
      <h1>Page 2</h1>
      <div>
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
      </div>
    </Layout>
  )
}

export default page2
