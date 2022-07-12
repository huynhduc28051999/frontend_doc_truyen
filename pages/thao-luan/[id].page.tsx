import MainLayout from '@/components/layout/mainLayout'
import PageBreadcrumb from '@/components/pageBreadcrumb'
import TopGroup from '@/components/TopGroup'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Comments from './Comments'

function DiscussDetail() {
  return (
    <MainLayout customClass="discuss-detail">
      <TopGroup />
      <main id="mainpart" className="custome-page" style={{ minHeight: 782 }}>
        <PageBreadcrumb name='Thảo luận' link='/thao-luan' />
        <Container>
          <section className="page-content basic-section">
            <header className="sect-header">
              <span className="sect-title"><a href="/thao-luan/77-quy-dinh-doi-voi-oln">Quy Định Đối Với Truyện Sáng Tác - OLN</a></span>
            </header>
            <main className="sect-body">
              <Row>
                <Col xs={8}>
                  <div className="page-author group-admin">
                    <div className="author_ava">
                      <img src="https://i.docln.net/lightnovel/users/ua934-8740fdc0-aa8d-40d0-9201-1a952f1dda68.jpg" />
                    </div>
                    <div className="author-info">
                      <div className="author_name"><a href="https://docln.net/thanh-vien/934">Le Ciel</a></div>
                      <div className="author_role"><span>Administrators</span></div>
                    </div>
                  </div>
                </Col>
                <Col xs={4}>
                  <time className="topic-time timeago" title="02/03/2017 19:17:53" dateTime="2017-03-02T19:17:53+07:00">5 năm</time>
                </Col>
              </Row>
              <div className="forum-page-content long-text">
                <p>

                QUY ĐỊNH RIÊNG DÀNH CHO TRUYỆN SÁNG TÁC (OLN, OWN)

                A. VỀ HÌNH THỨC:



                1. Truyện sáng tác gồm truyện dài và truyện ngắn. Truyện dài gồm nhiều tập (có thể toàn tập nếu không phân tập), mỗi tập có nhiều chương. Truyện ngắn chỉ có một tập, trong đó có thể phân nhiều chương. Truyện ngắn bắt buộc gắn tag Oneshot và tuân theo quy định D19.

                2. Chương truyện gồm chương chính và chương phụ. Chương chính có đánh số theo hệ số Ả Rập hoặc hệ số La Mã; hoặc đánh thứ tự theo chữ cái ABC. Chương phụ là những chương không được đánh thứ tự theo cách trên. Ví dụ: Chương đầu/kết, Giao đoạn, Lời bạt, Phụ chương, Chương đánh số thập phân như 1.5,… Trong trường hợp tác giả không dùng cách trên để đánh số thứ tự, tất cả các chương đều được mặc định là chương chính.

                3. Truyện sáng tác phải được trình bày bằng tiếng Việt đúng chính tả. Tuyệt đối không sử dụng ngôn ngữ lai căng không thuộc quy chuẩn văn học chính quy như teencode, từ viết tắt, các loại emoji, lạm dụng từ Hán Việt, hậu tố ngữ/kính ngữ tiếng Nhật như -chan, -kun, -san…, không dùng ngoại ngữ nếu không cần thiết,…

                4. Truyện phải được trình bày theo quy tắc đánh máy thông dụng và quy chuẩn dấu câu của Việt Nam.



                B. VỀ NỘI DUNG:



                5. Đối tượng đọc chủ yếu hướng đến thanh/thiếu niên Việt Nam nên không được cổ suý những hành vi lệch lạc, sai đạo đức, hoặc vi phạm pháp luật Việt Nam.

                6. Phải là truyện do bản thân tự sáng tác bao gồm cốt truyện, bối cảnh, và nhân vật,… nguyên gốc do tác giả tự nghĩ ra. Tuyệt đối cấm sử dụng hoặc vay mượn cốt truyện, bối cảnh, hoặc nhân vật,… từ những tác phẩm chính thống, đã xuất bản, hoặc đã đăng trên mạng. Nghiêm cấm sao chép hoặc đạo nhái truyện của tác giả khác dưới mọi hình thức. Các tác giả vi phạm điều này sẽ bị khóa tài khoản vĩnh viễn.

                7. Chỉ được phép ám chỉ (reference), hoặc cài cắm những tình tiết, bối cảnh, hoặc nhân vật,… (Easter egg), hoặc viết văn nhại (parody) trong những tác phẩm thuộc điều 6 khi không đề cập chính xác tên nhân vật, tên đồ vật, tên địa danh, hoặc tên tác phẩm đó,…; hoặc trong những tác phẩm thuộc phạm vi công cộng (public domain) như truyền thuyết, thần thoại, truyện cổ tích, điển tích,… Vi phạm điều 7 được tính như vi phạm điều 6.

                8. Không đăng fanfic về những nhân vật hư cấu hoặc có thật, hoặc sử dụng lại bối cảnh của bất kỳ truyện nào khác không thuộc sở hữu của mình. Nghiêm cấm đề cập đến nhân vật lịch sử có thật tại Việt Nam.

                9. Không viết những nội dung mang tính đả kích, bôi nhọ, xuyên tạc bất kỳ cá nhân, tổ chức, hội nhóm, tôn giáo, đảng phái nào có thật trừ khi tác giả có thể chứng minh được sự đồng ý của bên đó và được bên đó đối chứng xác nhận.

                10. Không câu kéo lượt đọc dưới những hình thức gian lận như việc lạm dụng cảnh báo 18+, gắn các tag không có trong nội dung truyện, xoá chương cũ rồi đăng lại, đăng chương chưa hoàn thành, spam tên hoặc link truyện ở nhiều nơi trên Hako, đặt tên hoặc chọn ảnh bìa có tính gây nhầm lẫn.



                C. VỀ HÌNH ẢNH MINH HỌA VÀ CÁC VẤN ĐỀ LIÊN QUAN:



                11. Tác giả được quyền sử dụng và chỉnh sửa mọi hình ảnh bao gồm hình tự sản xuất hoặc hình có nguồn gốc trên mạng để làm ảnh bìa truyện, ảnh bìa tập.

                12. Tất cả hình ảnh minh hoạ khác như nhân vật, địa danh, đồ vật,… trong truyện đều phải do tác giả tự sản xuất, thuê sản xuất, hoặc sản xuất từ những nguồn không có bản quyền. Khi được yêu cầu, tác giả phải chứng minh được quyền sử dụng những hình ảnh này. Hako không chịu trách nhiệm nếu có tranh chấp xảy ra. Tuyệt đối không lạm dụng hình ảnh minh họa! Yêu cầu tìm hiểu kỹ về vấn đề minh họa trước khi áp dụng.

                13. Tất cả hình ảnh được dùng làm bìa hoặc minh hoạ đều phải bảo đảm tính mỹ quan, không thô tục, nhạy cảm.
                </p>
              </div>
            </main>
          </section>
          <Comments />
        </Container>
      </main>
    </MainLayout>
  )
}

export default DiscussDetail