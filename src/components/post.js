import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import RehypeReact from 'rehype-react'
import Navigation from './navigation'
import { toKebabCase } from '../helpers'

import Techs from './Techs'

import style from '../styles/post.module.css'

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: { techno: Techs },
}).Compiler

const Post = ({
  title,
  path,
  coverImage,
  htmlAst,
  previousPost,
  nextPost,
  miniPic,
}) => {
  const previousPath = previousPost && previousPost.frontmatter.path
  const previousLabel = previousPost && previousPost.frontmatter.title
  const nextPath = nextPost && nextPost.frontmatter.path
  const nextLabel = nextPost && nextPost.frontmatter.title

  return (
    <div className={style.post}>
      <div className={style.postContent}>
        <h1 className={style.title}>{title}</h1>

        {coverImage && (
          <Img
            fluid={coverImage.childImageSharp.fluid}
            className={miniPic ? style.miniPic : style.coverImage}
          />
        )}

        <div>{renderAst(htmlAst)}</div>
        <Navigation
          previousPath={previousPath}
          previousLabel={previousLabel}
          nextPath={nextPath}
          nextLabel={nextLabel}
        />
      </div>
    </div>
  )
}

Post.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  coverImage: PropTypes.object,
  htmlAst: PropTypes.string,
  previousPost: PropTypes.object,
  nextPost: PropTypes.object,
  miniPic: PropTypes.bool,
}

export default Post
