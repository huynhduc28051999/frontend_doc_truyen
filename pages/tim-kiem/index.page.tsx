import MainLayout from '@/components/layout/mainLayout'
import TopGroup from '@/components/TopGroup'
import ThumItemFLow from 'pages/home/ThumItemFLow'
import React from 'react'
import { Container, Row } from 'reactstrap'

function TimKiem() {
  return (
    <MainLayout customClass="tim-kiem">
      <TopGroup />
      <main id="mainpart" className="search-page" style={{ minHeight: 545 }}>
        <header className="page-title">
          <div className="page-name_wrapper">
            <Container fluid="md">
              <span className="page-name"><i className="fas fa-circle"></i>Tìm kiếm</span>
            </Container>
          </div>
        </header>
        <div className="search-form_wrapper">
          <Container fluid="md">
            <form className="search-form clear" action="tim-kiem" method="get">
              <div className="row">
                <input id="search-page-input" className="search-form in col-8 col-md-10 col-lg-10" type="text" placeholder="Tối thiểu 2 kí tự" name="keywords" size={40} value="Bóng tối" />
                <input id="search-go" className="search-go_form search-form submit col-4 col-md-2 col-lg-2" type="submit" value="Tìm kiếm" />
              </div>
            </form>
          </Container>
        </div>
        <Container fluid="md">
          <section className="basic-section has-pagination">
            <main className="sect-body">
              <Row>
                {Array(7).fill(0).map((item, index) => (
                  <ThumItemFLow key={index} />
                ))}
              </Row>
            </main>
          </section>
        </Container>
      </main>
    </MainLayout>
  )
}

export default TimKiem