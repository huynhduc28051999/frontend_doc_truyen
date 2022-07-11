import Link from "next/link";
import React from "react";
import { Col, Row, Container } from "reactstrap";
import Carousel from 'react-multi-carousel';
import PopularThumb from "./PopularThumb";
import { Circle } from 'react-feather';

const DailyRecentViews = () => {
  return (
    <Container fluid="md" className="daily-recent-container">
      <Row>
        <Col xs={12} lg={9}>
          <div className="daily-recent_views">
            <header className="title">
              <span className="top-tab_title title-active">Nổi bật</span>
              <span className="top-tab_title">
                <Link
                  href={{
                    pathname: "danh-sach",
                    query: {
                      truyendich: 1,
                      sapxep: "topthang",
                    },
                  }}
                >
                  Top tháng
                </Link>
              </span>
              <span className="top-tab_title">
                <Link
                  href={{
                    pathname: "danh-sach",
                    query: {
                      truyendich: 1,
                      sapxep: "top",
                    },
                  }}
                >
                  Toàn t/gian
                </Link>
              </span>
            </header>
            <div className="tns-outer" id="tns1-ow">
              <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024
                    },
                    items: 4,
                    partialVisibilityGutter: 40
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                  }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={true}
                sliderClass=""
                slidesToSlide={2}
                swipeable
              >
                {Array(8).fill(0).map((item, key) => (
                  <PopularThumb key={key} />
                ))}
              </Carousel>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={3}>
          <section className="last-topics index-section">
            <header className="section-title">
              <Link href={{
                pathname: "/thao-luan"
              }}>
                <div>
                  <span className="sts-bold">Thảo</span>
                  <span className="sts-empty">Luận</span>
                </div>
              </Link>
            </header>
            <main>
              {Array(9).fill(0).map((item, index) => (
                <div key={index} className="topic-item">
                  <Row>
                    <Col xs={9} className="line-ellipsis">
                      <Circle size={18} color="#1ee865" />
                      <Link href={{
                        pathname: "/thao-luan"
                      }}>
                        <span>Thảo luận cho tác giả OLN</span>
                      </Link>
                    </Col>
                    <Col xs={3} className="topic-data text-right">
                      <time
                        className="timeago"
                        title="10-07-2022 18:48:49"
                        dateTime="2022-07-10T18:48:49+07:00"
                      >
                        1 giờ
                      </time>
                    </Col>
                  </Row>
                </div>
              ))}
            </main>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default DailyRecentViews;
