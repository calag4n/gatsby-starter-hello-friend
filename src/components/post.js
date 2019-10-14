import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import RehypeReact from 'rehype-react'

import Techs from './Techs'

import style from '../styles/post.module.css'

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: { techno: Techs },
}).Compiler

<<<<<<< HEAD
const Post = ({
  title,
  date,
  path,
  coverImage,
  author,
  excerpt,
  htmlAst,
  previousPost,
  nextPost,
}) => {
  const previousPath = previousPost && previousPost.frontmatter.path
  const previousLabel = previousPost && previousPost.frontmatter.title
  const nextPath = nextPost && nextPost.frontmatter.path
  const nextLabel = nextPost && nextPost.frontmatter.title

  return (
    <div className={style.post}>
      <div className={style.postContent}>
        <h1 className={style.title}>
          {excerpt ? <Link to={path}>{title}</Link> : title}
        </h1>
        <div className={style.meta}>
          {date} {author && <>— Written by {author}</>}
        </div>
=======
const Post = ({ title, coverImage, htmlAst, miniPic }) => (
  <div className={style.post}>
    <div className={style.postContent}>
      <h1 className={style.title}>{title}</h1>

      {coverImage && (
        <Img
          fluid={coverImage.childImageSharp.fluid}
          className={miniPic ? style.miniPic : style.coverImage}
        />
      )}
>>>>>>> test

      <div>{renderAst(htmlAst)}</div>
    </div>
  </div>
)

Post.propTypes = {
  title: PropTypes.string,
  coverImage: PropTypes.object,
<<<<<<< HEAD
  author: PropTypes.string,
  excerpt: PropTypes.string,
  htmlAst: PropTypes.string,
  previousPost: PropTypes.object,
  nextPost: PropTypes.object,
=======
  htmlAst: PropTypes.string,
  miniPic: PropTypes.bool,
>>>>>>> test
}

export default Post
