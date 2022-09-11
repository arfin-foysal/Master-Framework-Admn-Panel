import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from './contexts/ConfigContext';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import AuthApi from './contexts/api/AuthApi';
import RoleApi from './contexts/api/RoleApi';
import PermissionApi from './contexts/api/PermissionApi';
import RoleToPermissionApi from './contexts/api/RoleToPermissionApi';
import UserApi from './contexts/api/UserApi';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <Provider store={store}>
    <AuthApi>
      <UserApi>
        <RoleApi>
          <RoleToPermissionApi>
            <PermissionApi>
              <ConfigProvider>
                <App />    {/*  base Component*/}
              </ConfigProvider>
            </PermissionApi>  
          </RoleToPermissionApi>
        </RoleApi>
      </UserApi>
    </AuthApi>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
