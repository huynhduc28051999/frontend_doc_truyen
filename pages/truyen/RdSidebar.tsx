import React from 'react'
import { Plus } from 'react-feather'
import { Col, Row } from 'reactstrap'
import OtherAuthor from './OtherAuthor'

function RdSidebar() {
  return (
    <>
      <Row>
        <Col xs={12} md={6} lg={12} className='no-push no-push-l push-3-m'>
          <section className="series-users">
            <main>
              <div className="series-owner group-mem">
                <img width="50px" height="50px" src="https://i.docln.net/lightnovel/users/ua176-4ac524b9-7a25-4013-9453-f5f49f6355a3.jpg" alt="Poster's avatar" />
                <div className="series-owner-title">
                <span className="series-owner_name"><a href="https://docln.net/thanh-vien/176">Nguyễn Trần Anh Khoa</a></span>
                </div>
              </div>
              <div className="fantrans-section">
                <div className="fantrans-name">Nhóm dịch</div>
                <div className="fantrans-value"><a href="https://docln.net/nhom-dich/428-neet-kiem-hikkomori">NEET-kiêm-Hikkomori</a></div>
              </div>
              <div className="series-owner_share">
                <span className="owner_share-title" title="Tham gia">Tham gia</span>
                <a className="ln_info-name" href="https://docln.net/thanh-vien/8022" style={{ paddingLeft: 5 }}>JunnySnow</a>,
                <a className="ln_info-name" href="https://docln.net/thanh-vien/15453" style={{ paddingLeft: 5 }}>Mepba</a>,
                <a className="ln_info-name" href="https://docln.net/thanh-vien/18489" style={{ paddingLeft: 5 }}>Akashi Haji</a>,
                <a className="ln_info-name" href="https://docln.net/thanh-vien/22591" style={{ paddingLeft: 5 }}>DreadlorD</a>
              </div>
              <div className="owner-donate" style={{ padding: 0 }}>

              </div>
            </main>
          </section>
        </Col>
      </Row>
      <section className="series-note basic-section gradual-mobile">
        <header className="sect-header"><span className="sect-title">Chú thích thêm</span><span className="mobile-icon"><i className="fas fa-chevron-down"></i></span></header>
        <main className="d-lg-block" style={{ display: 'none' }}>
          <div className="long-text" style={{ wordWrap: 'break-word' }}>
            <p><em>Trans</em>: <strong>Nguyễn Trần Anh Khoa (Beast666)</strong></p>
            <p><em>QC: </em><strong>Akashi Haji</strong></p>
            <p>Về góc nhìn meta (メタ視点) được nhắc đến trong phần tóm tắt, đây là một thuật ngữ ám chỉ một góc nhìn nằm ngoài thế giới, nắm bắt sự vật và sự kiện trong thế giới này một cách khách quan. Trong bộ này thì đó là góc nhìn của MC - Koutarou, nhìn thế giới này như một bộ romcom mà Ryuuzaki là nhân vật chính của bộ romcom đấy.</p>
            <p><em>Nguồn raw</em>: <a href="https://ncode.syosetu.com/n8856gp/" rel="nofollow noreferrer noopener" target="_blank">霜月さんはモブが好き </a></p>
            <p><em>Twitter tác giả</em>: <a href="https://twitter.com/yagamikagami45" rel="nofollow noreferrer noopener" target="_blank">八神鏡</a></p>
            <p><em>Twitter artist</em>: <a href="https://twitter.com/R_o_ha" rel="nofollow noreferrer noopener" target="_blank">Roha</a></p>
            <p><strong>Link mua sách: </strong><a href="https://www.melonbooks.co.jp/detail/detail.php?product_id=1095471" rel="nofollow noreferrer noopener" target="_blank"><em>Vol 1</em></a> |&nbsp;<em><a href="https://www.melonbooks.co.jp/detail/detail.php?product_id=1200524" rel="nofollow noreferrer noopener" target="_blank">Vol 2</a></em><strong>&nbsp;</strong></p>
            <p><em><a href="https://www.melonbooks.co.jp/detail/detail.php?product_id=1512147" rel="nofollow noreferrer noopener" target="_blank">Link pre-order vol 3 (Bản đặc biệt)</a></em></p>
            <p><strong>Đây là bản dịch hoàn toàn từ bản gốc WN tiếng Nhật trên syosetu.&nbsp;</strong></p>
            <p><strong>Nghiêm cấm spoil, vì mình vừa đọc vừa dịch...</strong></p>
          </div>
        </main>
      </section>
      <section className="basic-section gradual-mobile">
        <header className="sect-header"><span className="sect-title">Truyện cùng nhóm dịch</span><span className="mobile-icon"><i className="fas fa-chevron-down"></i></span></header>
        <main className="d-lg-block" style={{ display: 'none' }}>
          <ul className="others-list">
            {Array(4).fill(0).map((item, index) => (
              <OtherAuthor key={index} />
            ))}
          </ul>
        </main>
      </section>

      <section className="basic-section gradual-mobile">
        <header className="sect-header"><span className="sect-title">Thảo luận</span><span className="mobile-icon"><i className="fas fa-chevron-down"></i></span></header>
        <main className="d-lg-block" style={{ display: 'none' }}>
          <div className="text-right pad-10">
          <a
            className="button button-newpost button-green"
            href="https://docln.net/action/page/create"
          >
            <Plus size={18} />Tạo bài viết
          </a>
          </div>
        </main>
      </section>

      <section id="list-vol" className="none list_vol-section">
        <div className="list-volume-wrapper basic-section">
          <header className="sect-header"><span className="sect-title">Mục lục</span></header>
          <span className="list-vol_off">
            <i className="fas fa-times"></i>
          </span>
          <ol className="list-volume unstyled no-margin no-padding">
            <li data-scrollto="#volume_16958"><span className="list_vol-order">01.</span><span className="list_vol-title">Chính truyện - Phần Một</span></li>
            <li data-scrollto="#volume_17198"><span className="list_vol-order">02.</span><span className="list_vol-title">Chính truyện - Phần Hai</span></li>
            <li data-scrollto="#volume_17480"><span className="list_vol-order">03.</span><span className="list_vol-title">Chuyện phiếm - Phần Một</span></li>
            <li data-scrollto="#volume_17496"><span className="list_vol-order">04.</span><span className="list_vol-title">Chính truyện - Phần Ba</span></li>
            <li data-scrollto="#volume_17863"><span className="list_vol-order">05.</span><span className="list_vol-title">Chuyện phiếm - Phần Hai</span></li>
            <li data-scrollto="#volume_17908"><span className="list_vol-order">06.</span><span className="list_vol-title">Chính truyện - Phần Bốn</span></li>
          </ol>
        </div>
      </section>
    </>
  )
}

export default RdSidebar