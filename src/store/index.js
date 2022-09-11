import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query'
import reducers from './reducers';
// import { PostApi } from '../services/PostApi';
// import { AuthApi } from '../services/AuthApi';
// import { RoleApi } from '../services/RoleApi';
// import { UserApi } from '../services/UserApi';

const store = configureStore({
  reducer: {
    reducers,
    // [PostApi.reducerPath]: PostApi.reducer,
    // [AuthApi.reducerPath]: AuthApi.reducer,
    // [RoleApi.reducerPath]: RoleApi.reducer,
    // [UserApi.reducerPath]: UserApi.reducer,
    devTools: true
  },
  
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware()
//       .concat
//       ([
//         PostApi.middleware,
//         AuthApi.middleware,
//         RoleApi.middleware,
//         UserApi.middleware
//       ]),
  
});

// setupListeners(store.dispatch)
export const useSelector = useReduxSelector;

export const useDispatch = () => useReduxDispatch();

export default store;
