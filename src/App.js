import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { FirebaseProvider } from './contexts/FirebaseContext';
import routes, { renderRoutes } from './routes';
import { BASENAME } from './config/constant';
import SignUp2 from './views/auth/signup/SignUp2';
import SignIn2 from './views/auth/signin/SignIn2';


let userRoute;
const user = localStorage.getItem("user");
if (user === null) {
  userRoute = (
    <>
      <Switch>
        <Route exact path="/auth/signup" component={SignUp2} />
        <Route exact path="/auth/signin" component={SignIn2} />
        {/* <Route exact path="/forgotEmail" component={ForgotEmail} /> */}
        <Redirect to="/auth/signin" />
      </Switch>
    </>
  );
} else {
  userRoute = (
    <>
    <FirebaseProvider>{renderRoutes(routes)}</FirebaseProvider>
    </>
  );
}



const App = () => {
  return (
    <React.Fragment>
      <Router basename={BASENAME}>
        {userRoute}
        {/* <FirebaseProvider>{renderRoutes(routes)}</FirebaseProvider> */}
      </Router>
    </React.Fragment>
  );
};

export default App;
