import React from "react";
import { LocalStorage } from "shared/config/localStorage";
import { LocalStorageKey } from "shared/constant/common";

function ReadingSeries() {
  const storiesHistory = JSON.parse(
    LocalStorage.get(LocalStorageKey.reading_series) || "[]"
  );
  return (
    <section id="reading-history" className="index-section">
      <header className="section-title">
        <a href="#">
          <span className="sts-bold">Truyện</span>
          <span className="sts-empty">vừa đọc</span>
        </a>
      </header>
      <main className="sect-body">
        {storiesHistory.map((reading: any, index: number) => (
          <div className="row ml-1 mb-3" key={index}>
            <div className="col-2 col-lg-2 a6-ratio">
              <div
                className="img-contain-ratio content"
                style={{ backgroundImage: 'url("images/Bookcover.png")' }}
              ></div>
            </div>
            <div className="col-8 col-lg-8">
              <a
                x-text="reading.series_title"
                href={reading.storyUrl}
                className="text-truncate block font-weight-bold"
              >
                {reading.storyTitle}
              </a>
              <a
                x-text="reading.chapter_title"
                href={reading.chapperUrl}
                className="text-truncate block"
              >
                {reading.chapperTitle}
              </a>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
}

export default ReadingSeries;
