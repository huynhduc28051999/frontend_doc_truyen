import React from 'react'

function ReadingSeries() {
  return (

    <section id="reading-history" className="index-section" >
      {/* x-data="{ storage: (JSON.parse(localStorage.getItem('reading_series')) || []).slice(0,4) }" */}
      <header className="section-title">
        <a href="https://docln.net/lich-su-doc">
          <span className="sts-bold">Truyện</span><span className="sts-empty">vừa đọc</span>
        </a>
      </header>
      <main className="sect-body">
        {/* <template x-for="reading in storage">
      <div className="row ml-1 mb-3">
      <div className="col-2 col-lg-2 a6-ratio">
      <div className="img-contain-ratio content" :style="{ backgroundImage: reading.series_cover }"></div>
      </div>
      <div className="col-8 col-lg-8">
      <a x-text="reading.series_title" :href="reading.series_url" className="text-truncate block font-weight-bold"></a>
      <div x-text="reading.book_title" className="small mb-3 text-truncate"></div>
      <a x-text="reading.chapter_title" :href="reading.chapter_url" className="text-truncate block"></a>
      </div>
      <div>
      </div></div></template> */}
      </main>
    </section>
  )
}

export default ReadingSeries