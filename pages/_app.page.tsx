import React from 'react';
import '../assets/scss/theme.scss';
import App, { AppContext, AppProps } from 'next/app';
import { connect } from 'react-redux';
import { wrapper } from 'redux/store';
import { NextPageContext } from 'next';
import { Store } from 'redux';
import Cookies from 'cookie';
import { END, Task } from 'redux-saga';
import { isBrowser } from 'shared/utils';
import { CookiesStorage } from 'shared/config/cookie';
import { getCurrentUser } from 'redux/actions';

const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

const mapDispatchToProps = () => ({});

const withConnect = connect(null, mapDispatchToProps);
interface SagaStore extends Store {
  sagaTask: Task;
}
interface NextPageContextCtx extends NextPageContext {
  store: SagaStore;
}
interface AppContextProps extends AppContext {
  ctx: NextPageContextCtx;
}

MyApp.getInitialProps = async (appContext: AppContextProps) => {
  const appProps = await App.getInitialProps(appContext);
  const {
    ctx: { req },
  } = appContext;
  if (isBrowser()) {
    const accessToken = CookiesStorage.getAccessToken();
    if (accessToken) {
      console.log('getInitialProps client');

      const state = appContext.ctx.store.getState();
      if (!state.authReducer?.user?.id) {
        appContext.ctx.store.dispatch(getCurrentUser({ params: { accessToken } }));
      }
    }
  } else {
    const { accessToken } = Cookies.parse(req?.headers.cookie || '');
    if (accessToken) {
      appContext.ctx.store.dispatch(getCurrentUser({ params: { accessToken } }));
      appContext.ctx.store.dispatch(END);
      await appContext.ctx.store.sagaTask.toPromise();
    }
  }
  return { ...appProps };
};

export default wrapper.withRedux(withConnect(MyApp));
