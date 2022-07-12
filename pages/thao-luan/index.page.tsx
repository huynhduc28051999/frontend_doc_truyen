import Footer from "@/components/Footer";
import MainLayout from "@/components/layout/mainLayout";
import TopGroup from "@/components/TopGroup";
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, { PaginationListStandalone, PaginationProvider } from "react-bootstrap-table2-paginator";
import { Input } from "reactstrap";
import { Plus } from "react-feather";

const data = [
  {
    id: 'Không biết nữa 1',
    name: 'Tin tức',
    comment:  60,
    count: 9082,
    time: '2 tháng',
    last: 'huynh thien an'
  },
  {
    id: 'Không biết nữa 2',
    name: 'Tin tức',
    comment:  60,
    count: 9082,
    time: '2 tháng',
    last: 'huynh thien an'
  },
  {
    id: 'Không biết nữa 3',
    name: 'Tin tức',
    comment:  60,
    count: 9082,
    time: '2 tháng',
    last: 'huynh thien an'
  }
]

const columns = [
  {
    dataField: "id",
    text: "Chủ đề",
  },
  {
    dataField: "name",
    text: "Chuyên mục",
  },
  {
    dataField: "comment",
    text: "Bình Luận",
  },
  {
    dataField: "count",
    text: "Lượt xem",
  },
  {
    dataField: "time",
    text: "Gần nhất",
  },
  {
    dataField: "last",
    text: "Người đăng cuối",
  },
];

function ThaoLuan() {
  const pagination = paginationFactory({
    custom: true,
    hideSizePerPage: true,
    sizePerPage: 1,
    totalSize: 3,
    withFirstAndLast: true,
    lastPageText: 'Cuối',
    firstPageText: 'Đầu',
    paginationSize: 1,
    page: 1,
  });

  return (
    <MainLayout customClass="tim-kiem">
      <TopGroup />

      <main id="mainpart" className="page-board">
        <header className="page-title">
          <div className="page-name_wrapper">
            <div className="container relative">
              <span className="page-name">
                <a href="thao-luan">
                  <i className="fas fa-circle"></i>Thảo luận
                </a>
              </span>
            </div>
          </div>
        </header>
        <div className="container clear">
          <section className="board-toolkit clear">
            <div className="board_categ-list">
              <Input
                id="exampleSelectMulti"
                name="selectMulti"
                type="select"
                placeholder="Đánh giá"
                defaultValue="all"
              >
                <option value="all">Tất cả</option>
                <option value="notification">Thông báo</option>
                <option value="new">Tin tức</option>
                <option value="question">Hỏi đáp</option>
                <option value="rate">Đánh giá</option>
                <option value="discuss">Thảo luận</option>
              </Input>
            </div>
            <a
              className="button button-newpost button-green"
              href="https://docln.net/action/page/create"
            >
              <Plus size={18} />Thêm
            </a>
          </section>
          <section
            className="board-list has-pagination"
            style={{ marginTop: 20 }}
          >
            <PaginationProvider pagination={pagination}>
              {({ paginationProps, paginationTableProps }) => (
                <div>
                  <BootstrapTable
                    {...paginationTableProps}
                    headerWrapperClasses="thead-light"
                    bodyClasses="text-break"
                    bordered
                    remote={{ pagination: true, sort: true }}
                    hover
                    keyField='id'
                    data={data}
                    columns={columns}
                    onTableChange={() => {}}
                  />
                  <div className="d-flex justify-content-end align-items-center">
                    <PaginationListStandalone {...paginationProps} />
                  </div>
                </div>
              )}
            </PaginationProvider>
          </section>
        </div>
      </main>
      <Footer />
    </MainLayout>
  );
}

export default ThaoLuan;
