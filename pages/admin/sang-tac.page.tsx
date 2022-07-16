import AuthGuard from '@/components/HOC/authGuard'
import AuthLayout from '@/components/layout/authLayout';
import Loader from '@/components/loader';
import React, { Dispatch, useEffect } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationListStandalone, PaginationProvider } from 'react-bootstrap-table2-paginator';
import { connect, ConnectedProps } from 'react-redux';
import { Button, CardBody, Container } from 'reactstrap';
import { getOwnStories } from 'redux/actions/storyAction';
import { Action } from 'types';
import { STORY_STATUS, STORY_TYPE } from './constants';

const columns = [
  {
    dataField: "title",
    text: "Tiêu đề",
  },
  {
    dataField: "author",
    text: "Tác giả",
  },
  {
    dataField: "type",
    text: "Loại truyện",
    formatter: (status: keyof typeof STORY_TYPE) => STORY_TYPE[status],
  },
  {
    dataField: "status",
    text: "Tình trạng dịch",
    formatter: (status: keyof typeof STORY_STATUS) => STORY_STATUS[status],
  },
  {
    dataField: 'action',
    isDummyField: true,
    text: '',
    formatter: (_: undefined, row: any) => {
      const FormatterComponent = (
        <div className='d-flex jutify-center'>
          <Button color="primary" className="btn-edit" style={{ marginRight: 10 }} onClick={() => {}}>
            Xem chi tiết
          </Button>
          <Button color="primary" className="btn-edit" onClick={() => {}}>
            Xoá
          </Button>
        </div>
      );
      return FormatterComponent;
    },
    headerStyle: { width: 200 },
  },
];

type Props = PropsFromRedux & {
  currentUser: any
}

function Series(props: Props) {
  const { currentUser, getOwnStoriesAction, loading, stories } = props;

  useEffect(() => {
    getOwnStoriesAction();
  }, [])
  
  const pagination = paginationFactory({
    custom: true,
    hideSizePerPage: true,
    sizePerPage: 20,
    totalSize: stories.length,
    withFirstAndLast: true,
    lastPageText: 'Cuối',
    firstPageText: 'Đầu',
    paginationSize: 20,
    page: 1,
  });
  
  return (
    <AuthLayout>
      <Container fluid='lg' className='mt-5'>
        <div className="basic-section">
          <header className="sect-header"><span className="sect-title">Sáng tác của {currentUser.username}</span></header>
          <section
            className="board-list has-pagination"
            style={{ marginTop: 20 }}
          >
            <CardBody>
              {loading && <Loader />}
              <PaginationProvider pagination={pagination}>
                {({ paginationProps, paginationTableProps }) => (
                  <div>
                    <BootstrapTable
                      {...paginationTableProps}
                      headerWrapperClasses="thead-light"
                      bodyClasses="text-break"
                      bordered
                      hover
                      keyField='id'
                      data={stories}
                      columns={columns}
                      onTableChange={() => {}}
                    />
                    <div className="d-flex justify-content-end align-items-center">
                      <PaginationListStandalone {...paginationProps} />
                    </div>
                  </div>
                )}
              </PaginationProvider>
            </CardBody>
          </section>
        </div>
      </Container>
    </AuthLayout>
  )
}

const mapStateToProps = (state: any) => ({
  stories: state.storyReducer.stories,
  loading: state.storyReducer.loading
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  getOwnStoriesAction: () => dispatch(getOwnStories()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;


export default AuthGuard(connector(Series))