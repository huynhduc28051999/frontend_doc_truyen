import React, { Dispatch } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Label, FormGroup, Col, Input, FormFeedback, Form, Container, CardBody, Button } from 'reactstrap';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as yup from 'yup';
import { connect, ConnectedProps } from 'react-redux';
import dynamic from "next/dynamic";
import AuthGuard from '@/components/HOC/authGuard'
import AuthLayout from '@/components/layout/authLayout';
import { Action } from 'types';
import { TAG } from './constants';
import Checkbox from '@/components/form/Checkbox';

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

interface ICreateStoryProps extends PropsFromRedux {
  toggle: () => void;
  modal: boolean;
}

const defaultValues = {
  companyId: '',
  content: '<p></p>',
  name: '',
  type: 0,
  validFlg: true,
  genres: []
}

const CreateStory: React.FC<ICreateStoryProps> = (props) => {
  const {
    modal,
    isLoading,
    currentUser,
  } = props;
  const schema = yup.object().shape({
    title: yup.string().required('Tên truyện là bắt buộc'),
    author: yup.string().required('Tác giả là bắt buộc'),
    type: yup.string().required('Loại truyện là bắt buộc'),
    summary: yup.string().required('Tóm tắt là bắt buộc'),
    status: yup.string().required('Tình trạng dịch là bắt buộc'),
  });

  const { formState: { errors, isValid }, handleSubmit, control, reset } = useForm<any>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues,
  });

  const resetFormValue = () => {
    reset(defaultValues);
  };

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <AuthLayout>
      <Container fluid='lg' className='mt-5'>
        <div className="basic-section">
          <header className="sect-header"><span className="sect-title">Thêm truyện</span></header>
          {isLoading && <div className="preloader" />}
          <CardBody>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup row className='required'>
                <Label sm={2}>Tiêu đề</Label>
                <Col sm={10} className='pr-4'>
                  <Controller
                    name="title"
                    control={control}
                    render={({ field }) => <Input invalid={!!errors.title} type="text" {...field} />}
                  />
                  <FormFeedback>{errors?.title?.message}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={2}>Tên khác</Label>
                <Col sm={10} className='pr-4'>
                  <Controller
                    name="altname"
                    control={control}
                    render={({ field }) => <Input invalid={!!errors.altname} type="text" {...field} placeholder='Ngăn cách nhiều tên bằng dấu chấm phẩy ;' />}
                  />
                  <FormFeedback>{errors?.altname?.message}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row className='required'>
                <Label sm={2}>Tác giả</Label>
                <Col sm={10} className='pr-4'>
                  <Controller
                    name="author"
                    control={control}
                    render={({ field }) => <Input invalid={!!errors.author} type="text" {...field} />}
                  />
                  <FormFeedback>{errors?.author?.message}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={2}>Hoạ sĩ</Label>
                <Col sm={10} className='pr-4'>
                  <Controller
                    name="illustrator"
                    control={control}
                    render={({ field }) => <Input invalid={!!errors.illustrator} type="text" {...field} />}
                  />
                  <FormFeedback>{errors?.illustrator?.message}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row className='required'>
                <Label sm={2}>Loại truyện</Label>
                <Col sm={10} className='pr-4'>
                  <Controller
                    name="type"
                    control={control}
                    render={({ field }) => (
                      <Input invalid={!!errors.type} type="select" {...field} style={{ width: 200 }} >
                        <option value="1">Truyện dịch</option>
                        <option value="2">Truyện convert</option>
                        <option value="3">Truyện sáng tác</option>
                      </Input>
                    )}
                  />
                  <FormFeedback>{errors?.type?.message}</FormFeedback>
                </Col>
              </FormGroup>
              {/* <FormGroup row className='required'>
                <Label sm={2}>Nhóm dịch</Label>
                <Col sm={10} className='pr-4'>
                  <Controller
                    name="type"
                    control={control}
                    render={({ field }) => (
                      <Input invalid={!!errors.type} type="select" {...field} >
                        <option value="1">Truyện dịch</option>
                        <option value="2">Truyện convert</option>
                        <option value="3">Truyện sáng tác</option>
                      </Input>
                    )}
                  />
                  <FormFeedback>{errors?.type?.message}</FormFeedback>
                </Col>
              </FormGroup> */}
              <FormGroup row className='required'>
                <Label sm={2}>Thể loại</Label>
                <Col sm={10} className='pr-4'>
                  {TAG.map((item, index) => (
                    <label className="checkbox-inline" style={{ width: 130 }} key={item.value}>
                      <Checkbox control={control} name={`genders[${index}]`} value={item.value} /> &nbsp;
                      {item.name}
                    </label>
                  ))}
                </Col>
              </FormGroup>
              <FormGroup className='required'>
                <Label className='col-form-label'>Tóm tắt</Label>
                <Col >
                  <Controller
                    name="summary"
                    control={control}
                    render={({ field }) => (
                      <SunEditor
                        {...field}
                        lang={'en'}
                        height='250px'
                        setOptions={{
                          buttonList: [
                            ['undo', 'redo'],
                            ['formatBlock', 'align', 'fontSize'],
                            ['bold', 'italic', 'blockquote', 'link', 'list'],
                            ['fullScreen', 'codeView', 'preview'],
                          ]
                        }}
                        setContents={field.value}
                      />
                    )}
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Label className='col-form-label'>Chú thích thêm</Label>
                <Col >
                  <Controller
                    name="extra"
                    control={control}
                    render={({ field }) => (
                      <SunEditor
                        {...field}
                        lang={'en'}
                        height='250px'
                        setOptions={{
                          buttonList: [
                            ['undo', 'redo'],
                            ['formatBlock', 'align', 'fontSize'],
                            ['bold', 'italic', 'blockquote', 'link', 'list'],
                            ['fullScreen', 'codeView', 'preview'],
                          ]
                        }}
                        setContents={field.value}
                      />
                    )}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className='required'>
                <Label sm={2}>Tình trạng dịch</Label>
                <Col sm={10} className='pr-4'>
                  <Controller
                    name="status"
                    control={control}
                    render={({ field }) => (
                      <Input invalid={!!errors.type} type="select" {...field} style={{ width: 200 }} >
                        <option value="1">Đang tiến hành</option>
                        <option value="2">Tạm ngưng</option>
                        <option value="3">Đã hoàn thành</option>
                      </Input>
                    )}
                  />
                  <FormFeedback>{errors?.type?.message}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup className="form-group mb-0 pt-2 text-center">
                <Button className="btn-block btn btn-primary" type="submit" disabled={!isValid}>
                  Thêm truyện
                </Button>
              </FormGroup>
            </Form>
          </CardBody>
        </div>
      </Container>
    </AuthLayout>
  )
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({});

const mapStateToProps = (state: any) => {
  const { user } = state.authReducer;
  return { isLoading: true, currentUser: user };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default AuthGuard(connector(CreateStory));