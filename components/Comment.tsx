import React, { useState } from "react";
import moment from "moment";
import "moment/locale/vi";
moment.locale("vi");

function Comment(props: any) {
  const { comment, ownId } = props;
  const [showMore, setShowMore] = useState(true);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="ln-comment-group">
      <div id="ln-comment" className="ln-comment-item clear">
        <div className="ln-comment-user_ava">
          <img src="https://i.docln.net/lightnovel/users/ua118777-4ec37a6b-0552-492a-ad29-c003c9f99f7a.jpg" />
        </div>
        <div className="ln-comment-info">
          <div className="ln-comment-wrapper">
            <div className="ln-comment-user_name">
              <a href="#" className="strong">
                {comment.createBy?.username}
              </a>
              <div className="ln-comment-user_badge comment-mod">
                <b>{ownId === comment.createBy.id ? "Mod" : ""}</b>
              </div>
            </div>
            <div></div>
            <div
              className="ln-comment-content long-text"
              dangerouslySetInnerHTML={{ __html: comment.content }}
              style={
                showMore
                  ? { maxHeight: 100, overflow: "hidden" }
                  : { maxHeight: "none" }
              }
            />
            <div className={`comment_see_more ${showMore ? "expand" : ""}`} onClick={toggleShowMore}>
              {showMore ? "Xem thêm" : ""}
            </div>
          </div>
          <div className="visible-toolkit">
            <span className="ln-comment-time">
              <a href="/thao-luan/77-quy-dinh-doi-voi-oln?comment_id=1874304#ln-comment-1874304">
                <time
                  className="timeago"
                  title={new Date(comment.createdAt).toString()}
                  dateTime={new Date(comment.createdAt).toString()}
                >
                  {moment(comment.createdAt).fromNow(true)}
                </time>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
