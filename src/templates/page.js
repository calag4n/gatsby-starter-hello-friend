import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Post from '../components/post'

const BlogPostTemplate = ({ data }) => {
  const {
    frontmatter: { title, coverImage, miniPic },
    excerpt: autoExcerpt,
    id,
    htmlAst,
  } = data.markdownRemark

  return (
    <Layout>
      <SEO title={title} description={autoExcerpt} />
      <Post
        key={id}
        title={title}
        coverImage={coverImage}
        htmlAst={htmlAst}
        miniPic={miniPic}
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
