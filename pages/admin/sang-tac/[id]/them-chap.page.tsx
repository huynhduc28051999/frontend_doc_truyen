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
import { TAG } from '../../constants';
import Checkbox from '@/components/form/Checkbox';
import { Payload } from 'types/action';
import { createStory } from 'redux/actions/storyAction';
import { useRouter } from 'next/router';

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

interface ICreateStoryProps extends PropsFromRedux {}

const defaultValues = {
  summary: '<p></p>',
  type: '1',
  genres: [],
  title: '',
  altname: '',
  author: '',
  illustrator: '',
  extra: '<p></p>',
  status: '1'
}

const CreateStory: React.FC<ICreateStoryProps> = (props) => {
  const {
    isLoading,
    createStoryAction,
  } = props;
  const router = useRouter();
  const {  } = router;
  const schema = yup.object().shape({
    title: yup.string().required('Tiêu đề chương là bắt buộc'),
    content: yup.string().required('Tóm tắt là bắt buộc'),
  });

  const { formState: { errors, isValid }, handleSubmit, control } = useForm<any>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues,
  });

  const onSubmit = (data: any) => {
    const params = {
      ...data,
      status: Number(data.status),
      type: Number(data.type),
      genders: data.genders.filter((item: number | undefined) => !!item),
      altname: (data.altname ?? '').split(';').filter((item: string | undefined) => item)
    }
    // createStoryAction({ params })
  }

  return (
    <AuthLayout>
      <Container fluid='lg' className='mt-5'>
        <div className="basic-section">
          <header className="sect-header"><span className="sect-title">Thêm Chương</span></header>
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
              <FormGroup className='required'>
                <Label className='col-form-label'>Tóm tắt</Label>
                <Col >
                  <Controller
                    name="content"
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
                  <FormFeedback>{errors?.content?.message}</FormFeedback>
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

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  createStoryAction: (payload: Payload) => dispatch(createStory(payload)),
});

const mapStateToProps = (state: any) => {
  const { user } = state.authReducer;
  return { isLoading: true, currentUser: user };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default AuthGuard(connector(CreateStory));