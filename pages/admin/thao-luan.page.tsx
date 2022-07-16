import AuthGuard from '@/components/HOC/authGuard'
import AuthLayout from '@/components/layout/authLayout';
import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationListStandalone, PaginationProvider } from 'react-bootstrap-table2-paginator';
import { connect, ConnectedProps } from 'react-redux';
import { Container } from 'reactstrap';


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

type Props = PropsFromRedux & {
  currentUser: any
}

function Series(props: Props) {
  const { currentUser } = props;
  
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
    <AuthLayout>
      <Container fluid='md' className='mt-5'>
        <div className="basic-section">
          <header className="sect-header"><span className="sect-title">Thảo luận của {currentUser.username}</span></header>
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
      </Container>
    </AuthLayout>
  )
}

const mapStateToProps = (state: any) => ({
  error: state.authReducer.error
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;


export default AuthGuard(connector(Series))