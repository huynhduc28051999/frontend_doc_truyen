import React from 'react'
import { Row, Col } from 'reactstrap';

function Info() {
  return (
    <section className="feature-section at-series clear">
      <main className="section-body">
        <div className="top-part">
          <Row>
            <Col xs={12} md={3} className='left-column'>
              <div className="series-cover">
                <div className="series-type">
                  <span>Truyện dịch</span>
                </div>
                <div className="a6-ratio">
                  <div className="content img-in-ratio" style={{ backgroundImage: "url('https://i.docln.net/lightnovel/covers/s11586-d7a354cc-002a-42c7-8a4b-78e9f27be06d-m.jpg')" }}>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={9}>
            <div className="series-name-group">
                <span className="series-name">
                  <a href="/truyen/11586-shimotsuki-wa-mob-ga-suki">Shimotsuki wa Mob ga Suki</a>
                </span>
              </div>
              <div className="series-information">
                <div className="series-gernes" x-data="{ more: false }">
                  <a className="series-gerne-item" href="https://docln.net/the-loai/drama">Drama</a>
                  <a className="series-gerne-item" href="https://docln.net/the-loai/psychological">Psychological</a>
                  <a className="series-gerne-item" href="https://docln.net/the-loai/romance">Romance</a>
                  <a className="series-gerne-item" href="https://docln.net/the-loai/school-life">School Life</a>
                  <a className="series-gerne-item" href="https://docln.net/the-loai/shounen">Shounen</a>
                  <a className="series-gerne-item" href="https://docln.net/the-loai/web-novel">Web Novel</a>
                </div> <div className="info-item">
                  <span className="info-name">Tác giả:</span>
                  <span className="info-value "><a href="https://docln.net/tac-gia/Yagami%20Kagami">Yagami Kagami</a></span>
                </div>
                <div className="info-item">
                  <span className="info-name">Họa sĩ:</span>
                  <span className="info-value"><a href="https://docln.net/hoa-si/Roha">Roha</a></span>
                </div>
                <div className="info-item">
                  <span className="info-name">Tình trạng:</span>
                  <span className="info-value">
                    <a href="https://docln.net/truyen-dang-tien-hanh">Đang tiến hành</a>
                  </span>
                </div>
              </div>
              <div className="side-features">
              <div className="row">
                  <div className="col-4 col-md feature-item width-auto-xl">
                    <a id="collect" className="side-feature-button button-follow follow" href="https://docln.net/login">
                      <span className="block feature-value"><i className="far fa-heart"></i></span>
                      <span className="block feature-name"> 5968 </span>
                    </a>
                  </div>
                  <div className="col-4 col-md feature-item width-auto-xl">
                    <div className="series-rating rated">
                      <label htmlFor="open-rating" className="side-feature-button button-rate">
                        <span className="block feature-value"><i className="far fa-star"></i></span>
                        <span className="block feature-name">Đánh giá</span>
                      </label>
                      <input type="checkbox" id="open-rating" />
                    </div>
                  </div>
                  <div className="col-4 col-md feature-item width-auto-xl">
                    <div className="catalog-icon side-feature-button">
                      <span className="block feature-value"><i className="fas fa-list"></i></span>
                      <span className="block feature-name">Mục lục</span>
                    </div>
                  </div>
                  <div className="col-4 col-md feature-item width-auto-xl">
                    <a href="https://docln.net/truyen/11586-shimotsuki-wa-mob-ga-suki#series-comments" className="side-feature-button">
                      <span className="block feature-value"><i className="fas fa-comments"></i></span>
                      <span className="block feature-name">Bàn luận</span>
                    </a>
                  </div>
                  <div className="col-4 col-md feature-item width-auto-xl">
                    <label htmlFor="open-sharing" className="side-feature-button">
                      <span className="block feature-value"><i className="fas fa-share-alt"></i></span>
                      <span className="block feature-name">Chia sẻ</span>
                    </label>
                    <input type="checkbox" id="open-sharing" />
                    <div className="sharing-box">
                      <a x-data="" href="#" className="sharing-item" >Link rút gọn</a>
                      <a className="sharing-item" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdocln.net%2Ftruyen%2F11586-shimotsuki-wa-mob-ga-suki" target="_blank"><i className="fab fa-facebook-f"></i></a>
                      <a className="sharing-item" href="https://twitter.com/intent/tweet?text=Shimotsuki wa Mob ga Suki&amp;url=https%3A%2F%2Fdocln.net%2Ftruyen%2F11586-shimotsuki-wa-mob-ga-suki" target="_blank"><i className="fab fa-twitter"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="bottom-part">
          <Row>
            <Col xs={12}>
              <div className="row statistic-list">
                <div className="col-12 col-md-3 statistic-item block-wide at-mobile">
                  <div className="statistic-name">Lần cuối</div>
                  <div className="statistic-value"><time className="timeago" title="12/07/2022 14:34:05" dateTime="2022-07-12T14:34:05+07:00">7 giờ</time></div>
                </div>
                <div className="col-4 col-md-3 statistic-item">
                  <div className="statistic-name">Số từ</div>
                  <div className="statistic-value">298.842</div>
                </div>
                <div className="col-4 col-md-3 statistic-item">
                  <div className="statistic-name"> 1254 đánh giá</div>
                  <div className="statistic-value">4.9<small>/5</small></div>
                </div>
                <div className="col-4 col-md-3 statistic-item">
                  <div className="statistic-name">Lượt xem</div>
                  <div className="statistic-value">3.424.434</div>
                </div>
              </div>
            </Col>
            <Col xs={12} className='summary-wrapper other-facts'>
              <div className="fact-item">
                <div className="fact-name">Tên khác:</div>
                <div className="fact-value"> <div className="block pad-bottom-5">霜月さんはモブが好き</div>
                  <div className="block pad-bottom-5">Shimotsuki-san Loves The Mob</div>
                  <div className="block pad-bottom-5">Shimotsuki-san thích nhân vật nền</div>
                </div>
              </div>
            </Col>
            <Col xs={12} className='summary-wrapper'>
              <div className="series-summary">
                <h4>Tóm tắt</h4>
                <div className="summary-content">
                  <p>Nếu đây là một bộ romcom thông thường, có lẽ tôi sẽ chỉ là một nhân vật làm nền không hơn không kém.</p>
                  <p>Đứa em kế, cô bạn thân, và cả bạn thuở nhỏ, giờ đây ai nấy đều say đắm cái tên đào hoa kia cả rồi. Không cần làm gì, chỉ thở thôi cũng được yêu mến, thản nhiên khiến những người con gái quan trọng với tôi rơi vào harem, tên nhân vật chính đó giờ đang vui vẻ tận hưởng tuổi thanh xuân của mình.</p>
                  <p>Như một nhân vật phụ, đáng lẽ tôi chỉ có thể ngồi ở xó lớp mà quan sát nhân vật chính từ xa... vậy mà, cô ấy đã phát hiện ra tôi.</p>
                  <p>Bất kể có là bạn thuở nhỏ của nhân vật chính, với thân phận như là nữ chính, người con gái đó vẫn chọn tôi. Bình thường im lìm chẳng nói gì, biểu cảm cũng không có, thế mà chỉ với tôi thì cô cười nói luôn miệng.</p>
                  <p>Cô bảo tôi đặc biệt, hơn cả nhân vật chính kia, dù tôi chỉ là một thằng nhân vật nền...</p>
                  <p>Đây là câu chuyện về tôi, một tên nhân vật nền tẻ nhạt.</p>
                  <p>Được kể dưới góc nhìn meta, một câu chuyện romcom về nhân vật nền được Shimotsuki-san đem lòng yêu mến.</p>
                </div>
                <div className="summary-more more-state">
                  <div className="see_more">Xem thêm</div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </main>
    </section>
  )
}

export default Info