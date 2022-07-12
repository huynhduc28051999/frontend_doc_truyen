import React from "react";
import Comment from "./Comment";

function Comments() {
  return (
    <section className="basic-section">
      <main>
        <section className="ln-comment">
          <header>
            <h3>5616 Bình luận </h3>
          </header>
          <main className="ln-comment-body">
            <div className="ln-comment_sign-in long-text">
              Bạn phải <a href="/login">đăng nhập</a> hoặc{" "}
              <a href="/register">tạo tài khoản</a> để bình luận.
            </div>
            {Array(10).fill(0).map((item, index) => (
              <Comment key={index} />
            ))}
            <div className="ln-comment-page">
              <div className="pagination-footer">
                <div className="pagination_wrap">
                  {/* <a
                    href=""
                    className="paging_item paging_prevnext prev  disabled "
                  >
                    Trước
                  </a>
                  <a
                    href="https://docln.net/thao-luan/77-quy-dinh-doi-voi-oln?page=2"
                    className="paging_item paging_prevnext next"
                  >
                    Sau
                  </a> */}
                </div>
              </div>
            </div>{" "}
          </main>
        </section>
      </main>
    </section>
  );
}

export default Comments;
