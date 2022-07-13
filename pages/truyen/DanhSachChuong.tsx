import React from 'react'
import { Col, Row } from 'reactstrap'
import Chuong from './Chuong'

function DanhSachChuong() {
  return (
    <section className="volume-list at-series basic-section volume-mobile gradual-mobile ">
      <header id="volume_16958" className="sect-header">
        <span className="mobile-icon"><i className="fas fa-chevron-down"></i></span>
        <span className="sect-title">
          Chính truyện - Phần Một
        </span>
      </header>

      <main className="d-lg-block" style={{ display: 'none' }}>
        <Row>
          <Col xs={12} md={2}>
            <div className="volume-cover">
              <a href="/truyen/11586-shimotsuki-wa-mob-ga-suki/t16958-phan-mot">
                <div className="a6-ratio">
                <div className="content img-in-ratio" style={{ backgroundImage: "url('https://i.docln.net/lightnovel/covers/b16958-5300b2ba-42f0-4d08-bca8-13f9232ece70-m.jpg')" }}>
                </div>
                </div>
              </a>
            </div>
          </Col>
          <Col xs={12} md={10}>
            <ul className="list-chapters at-series">
              {Array(12).fill(0).map((item, index) => (
                <Chuong key={index} />
              ))}
            </ul>
          </Col>
        </Row>
      </main>
    </section>
  )
}

export default DanhSachChuong