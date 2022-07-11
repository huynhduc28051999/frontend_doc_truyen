import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import ReadingSeries from './ReadingSeries'
import ReadMore from './ReadMore'
import RecentComment from './RecentComment'
import ThumItemFLow from './ThumItemFLow'

function LastChapper() {
  return (
    <Container fluid="md">
      <Row>
        <Col xs={12} lg={9}>
          <section className="index-section thumb-section-flow last-chapter translation three-row">
            <header className="section-title">
              <span className="sts-bold">Chương</span><span className="sts-empty">mới nhất</span>
            </header>
            <Row>
              {Array(17).fill(0).map((item, index) => (
                <ThumItemFLow key={index} />
              ))}
              <ReadMore />
            </Row>
          </section>
          <section className="index-section thumb-section-flow last-chapter translation one-row">
            <header className="section-title">
              <span className="sts-bold">Sáng tác</span><span className="sts-empty">mới nhất</span>
            </header>
            <Row>
              {Array(5).fill(0).map((item, index) => (
                <ThumItemFLow key={index} />
              ))}
              <ReadMore />
            </Row>
          </section>
        </Col>
        <Col sm={12} lg={3}>
          <ReadingSeries />
          <RecentComment />
        </Col>
      </Row>
    </Container>
  )
}

export default LastChapper