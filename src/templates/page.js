import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Post from '../components/post'

const BlogPostTemplate = ({ data }) => {
  const {
    frontmatter: { title, date, path, author, coverImage, excerpt, miniPic, tech },
    excerpt: autoExcerpt,
    id,
    htmlAst,
  } = data.markdownRemark
  const idImage = data.idimg

  return (
    <Layout>
      <SEO title={title} description={excerpt || autoExcerpt} />
      <Post
        key={id}
        title={title}
        date={date}
        path={path}
        author={author}
        coverImage={coverImage}
        htmlAst={htmlAst}
        idImage={idImage}
        miniPic={miniPic}
        techs={tech}
      />
    </Layout>
  )
}

export default BlogPostTemplate

BlogPostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query($path: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        date
        path
        author
        excerpt
        miniPic
        tech
        coverImage {
          childImageSharp {
            fixed(width: 800, height: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      id
      htmlAst
      excerpt
    }
  }
`
