import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from 'redux/rootReducer';
import { isBrowser } from 'shared/utils';
import Loader from 'components/loader';
import { useRouter } from 'next/router';
import { RouterPath } from 'shared/constant/common';
import { CookiesStorage } from 'shared/config/cookie';

const AuthGuard = (Component: React.FC<any>) => {
  const WrappedComponent = (props: PropsFromRedux) => {
    const { loading, currentUser } = props;
    const router = useRouter();
    console.log({ loading });
    

    if (loading) {
      return <Loader />;
    }

    if (isBrowser()) {
      if (!currentUser?.id) {
        router.replace(RouterPath.Login);
        CookiesStorage.clearAccessToken();
        return <Loader />;
      }
    }

    return <Component {...props} />;
  };

  const mapStateToProps = (state: RootState) => ({
    currentUser: state.authReducer.user,
    loading: state.authReducer.isGettingMe,
  });

  const connector = connect(mapStateToProps);
  type PropsFromRedux = ConnectedProps<typeof connector>;

  return connector(WrappedComponent);
};

export default AuthGuard;
