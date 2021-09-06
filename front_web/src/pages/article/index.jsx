
import React, { useEffect, useState } from 'react'
import MarkDownView from '../../utils/markdownToHtml'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import ModuleApi from '../../api'

const Article = () => {
  const params = useParams()
  const [content, setContent] = useState()
  useEffect(() => {
    getDeatail()
  }, [])

  const getDeatail = () => {
    ModuleApi.getBlogDetail(params)
      .then(res => {
        setContent(res)
      })
      .catch(err => console.log(err))
  }

  return (
    <Box>
      {
        content && <MarkDownView content={content} />
      }
    </Box>
  )
}

const Box = styled.div`
  .article_nav{
      position: -webkit-sticky;
      position: sticky;
      top: 102px !important;
  }
`



export default Article