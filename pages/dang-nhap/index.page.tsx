import AuthLayout from '@/components/layout/authLayout';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Card, CardBody, Label, FormGroup, Input, Button } from 'reactstrap';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { RootState } from 'redux/rootReducer';

const Login = () => {
  const schema = yup.object().shape({
    username: yup.string().required('Tên đăng nhập là bắt buộc').trim(),
    password: yup.string().required('Mật khẩu là bắt buộc').trim(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    // dispatch(loginUser({ params: data, callback: previousUrl => Router.push(previousUrl) }));
  };

  return (
    <AuthLayout>
      <div className="account-pages my-5">
        <Container>
          <Row className="justify-content-center">
            <Col xl={10}>
              <Card className="">
                <CardBody className="p-0">
                  <Row>
                    <Col md={12} className="p-5 position-relative">
                      <form onSubmit={handleSubmit(onSubmit)} className="authentication-form">
                        <div className="mb-3">
                          <Label for="username" className="font-weight-bold text-dark">
                            Tên đăng nhập hoặc Email
                          </Label>
                          <Input />
                        </div>

                        <div className="mb-3">
                          <Label for="password" className="font-weight-bold text-dark">
                            Mật khẩu
                          </Label>
                          <Input type="password" />
                        </div>

                        <FormGroup className="form-group mb-0 pt-2 text-center">
                          <Button className="btn-block btn btn-primary" type="submit">
                            Đăng nhập
                          </Button>
                        </FormGroup>
                      </form>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </AuthLayout>
  );
};

export default Login;
