import Comments from '@/components/Comments'
import MainLayout from '@/components/layout/mainLayout'
import TopGroup from '@/components/TopGroup'
import React from 'react'
import { Breadcrumb, Col, Container, Row } from 'reactstrap'
import DanhSachChuong from './DanhSachChuong'
import Info from './Info'
import RdSidebar from './RdSidebar'

function Truyen() {
  return (
    <MainLayout>
      <TopGroup />
      <Breadcrumb name='Truyện dịch' linlk='/'/>
      <Container>
        <Row className='d-block clearfix'>
          <Col xs={12} lg={9} className='float-left'>
            <Info />
          </Col>
          <Col xs={12} lg={3} className='float-right' id="rd-sidebar">
            <RdSidebar />
          </Col>
          <Col xs={12} lg={9} className='float-left'>
            <DanhSachChuong />
            <Comments />
          </Col>
        </Row>
      </Container>
    </MainLayout>
  )
}

export default Truyen