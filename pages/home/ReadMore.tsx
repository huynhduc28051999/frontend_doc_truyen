import React from 'react'
import { Col } from 'reactstrap'
import { ArrowRightCircle } from 'react-feather'

function ReadMore() {
  return (
    <Col xs={4} lg={2} className="see-more thumb-item-flow">
      <div className="thumb-wrapper">
        <div className="a6-ratio">
          <div className="content img-in-ratio" style={{ backgroundImage: 'url("/images/nocover.jpeg")' }}></div>
        </div>
        <a href="https://docln.net/danh-sach?truyendich=1&amp;sapxep=capnhat">
          <div className="thumb-see-more">
            <div className="see-more-inside">
              <div className="see-more-content">
                <div className="see-more-icon">
                  <ArrowRightCircle size={40} />
                </div>
                <div className="see-more-text">Xem thêm</div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </Col>
  )
}

export default ReadMore