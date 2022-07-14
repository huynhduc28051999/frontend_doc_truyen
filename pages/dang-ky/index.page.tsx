import AuthLayout from '@/components/layout/authLayout';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Card, CardBody, Label, FormGroup, Input, Button, Form } from 'reactstrap';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as yup from 'yup';

import { RootState } from 'redux/rootReducer';

const Register = () => {
  const schema = yup.object().shape({
    username: yup.string().required('Tên đăng nhập là bắt buộc').trim(),
    email: yup.string()
      .required('Địa chỉ email là bắt buộc')
      .email('Email không đúng định dạng'),
    password: yup.string().required('Mật khẩu là bắt buộc').trim(),
    passwordConfirmation: yup.string()
     .oneOf([yup.ref('password'), null], 'Xác nhận mật khẩu không trùng khớp')
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur'
  });

  const onSubmit = (data: any) => {
    delete data.passwordConfirmation;
    console.log(data);
    
    // dispatch(loginUser({ params: data, callback: previousUrl => Router.push(previousUrl) }));
  };

  console.log(errors);
  
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
                      <Form onSubmit={handleSubmit(onSubmit)} className="authentication-form">
                        <div className="mb-3">
                          <Label for="username" className="font-weight-bold text-dark">
                            Tên đăng nhập
                          </Label>
                          <Input type='text' {...register('username')} />
                          {errors.username && <p className="text-danger mb-0">{(errors as any)?.username?.message}</p>}
                        </div>
                        <div className="mb-3">
                          <Label for="email" className="font-weight-bold text-dark">
                            Địa chỉ email
                          </Label>
                          <Input {...register('email')} />
                          {errors.email && <p className="text-danger mb-0">{(errors as any)?.email?.message}</p>}
                        </div>
                        <div className="mb-3">
                          <Label for="password" className="font-weight-bold text-dark">
                            Mật khẩu
                          </Label>
                          <Input type="password" {...register('password')} />
                          {errors.password && <p className="text-danger mb-0">{(errors as any)?.password?.message}</p>}
                        </div>
                        <div className="mb-3">
                          <Label for="passwordConfirmation" className="font-weight-bold text-dark">
                            Xác nhận mật khẩu
                          </Label>
                          <Input type="password" {...register('passwordConfirmation')} />
                          {errors.passwordConfirmation && <p className="text-danger mb-0">{(errors as any)?.passwordConfirmation?.message}</p>}
                        </div>
                        <FormGroup className="form-group mb-0 pt-2 text-center">
                          <Button className="btn-block btn btn-primary" type="submit">
                            Đăng ký
                          </Button>
                        </FormGroup>
                      </Form>
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

export default Register;
