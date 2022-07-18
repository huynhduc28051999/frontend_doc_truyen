import AuthGuard from '@/components/HOC/authGuard'
import AuthLayout from '@/components/layout/authLayout';
import Loader from '@/components/loader';
import { useRouter } from 'next/router';
import React, { Dispatch, useEffect } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationListStandalone, PaginationProvider } from 'react-bootstrap-table2-paginator';
import { Eye, Trash2 } from 'react-feather';
import { connect, ConnectedProps } from 'react-redux';
import { CardBody, Container } from 'reactstrap';
import { getOwnDiscuss } from 'redux/actions/discussAction';
import { formatDate } from 'shared/utils';
import { Action } from 'types';

type Props = PropsFromRedux & {
  currentUser: any
}

function Discuss(props: Props) {
  const { currentUser, getOwnDiscuss, loading, discuss } = props;
  const router = useRouter();

  useEffect(() => {
    getOwnDiscuss();
  }, [])

  const columns = [
    {
      dataField: "title",
      text: "Tiêu đề",
    },
    {
      dataField: "author",
      isDummyField: true,
      text: "Người đăng",
      formatter: () => currentUser.username,
    },
    {
      dataField: "createdAt",
      text: "ngày đăng",
      formatter: (data: number) => formatDate(data),
    },
    {
      dataField: 'action',
      isDummyField: true,
      text: 'Điều khiển',
      formatter: (_: undefined, row: any) => {
        const FormatterComponent = (
          <div className='d-flex jutify-center'>
            <Eye
              style={{ marginRight: 10 }}
              role="button"
              onClick={() => router.push({ pathname: '/truyen/[id]', query: { id: row.id } })} />
            <Trash2 role="button" />
          </div>
        );
        return FormatterComponent;
      },
      headerStyle: { width: 200 },
    },
  ];
  
  const pagination = paginationFactory({
    custom: true,
    hideSizePerPage: true,
    sizePerPage: 20,
    totalSize: discuss.length,
    withFirstAndLast: true,
    lastPageText: 'Cuối',
    firstPageText: 'Đầu',
    paginationSize: 20,
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
                      data={discuss}
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
  discuss: state.discussReducer.discuss,
  loading: state.discussReducer.isLoading,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  getOwnDiscuss: () => dispatch(getOwnDiscuss())
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default AuthGuard(connector(Discuss))