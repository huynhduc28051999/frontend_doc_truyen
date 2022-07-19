import Link from 'next/link'
import React from 'react'
import { Col } from 'reactstrap'

function ThumItemFLow(props: any) {
  const { story } = props;

  return (
    <Col sm={4} lg={2} className="thumb-item-flow">
      <div className="thumb-wrapper">
        <Link href={
          story.chapper
            ? { pathname: '/chap/[id]', query: { id: story.chapper?.id } }
            : { pathname: '/truyen/[id]', query: { id: story.id } }}
            title={story.chapper ? story.chapper.title : story.title }>
          <div className="a6-ratio">
            <div className="content img-in-ratio lazyloaded"
              style={{ backgroundImage: 'url("https://i.docln.net/lightnovel/covers/s10100-bf867302-08d2-4625-bf05-10bb6d651834-m.jpg")'}}
            ></div>
          </div>
        </Link>
        <div className="thumb-detail">
          <div
            className="thumb_attr chapter-title"
            title={story.chapper ? story.chapper.title : story.title }>
              <Link href={
                story.chapper
                  ? { pathname: '/chap/[id]', query: { id: story.chapper?.id } }
                  : { pathname: '/truyen/[id]', query: { id: story.id } }}
                  title={story.chapper ? story.chapper.title : story.title }>
                {story.chapper ? story.chapper.title : story.title }
              </Link>
          </div>
        </div>
      </div>
      <div className="thumb_attr series-title">
        <Link href={{ pathname: '/truyen/[id]', query: { id: story.id } }} title={story.title}>{story.title}</Link>
      </div>
    </Col>
  )
}

export default ThumItemFLow