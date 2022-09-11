import React, { useContext, useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { NavLink, Link, useHistory } from 'react-router-dom';
import { authApiContext } from '../../../contexts/api/AuthApi';
import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';
import { ToastContainer } from 'react-toastify';
// import { useLoginMutation } from '../../../services/AuthApi';

const SignIn2 = () => {
  // const [login, { isLoading, isSuccess }] = useLoginMutation();

  const { signin, resData, resError } = useContext(authApiContext);

  const history = useHistory();

  const [allData, setData] = useState({
    email: '',
    password: ''
  });
  const handleChange = (e) => setData({ ...allData, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    // e.preventDefault();
    await signin(allData);
    // after submit allData
    setData({
      email: '',
      password: ''
    });
    // if(localStorage.getItem('token')){
    //   window.location.reload(false)
  // }
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <Breadcrumb />
      <div className="auth-wrapper">
        <div className="auth-content">
          <div className="auth-bg">
            <span className="r" />
            <span className="r s" />
            <span className="r s" />
            <span className="r" />
          </div>
          <Card className="borderless">
            <Row className="align-items-center">
              <Col>
                <Card.Body className="text-center">
                  <div className="mb-4">
                    <i className="feather icon-user-plus auth-icon" />
                  </div>
                  <h3 className="mb-4">Sign In</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="input-group mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email address"
                        name="email"
                        value={allData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="input-group mb-4">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        value={allData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="custom-control custom-checkbox  text-left mb-4 mt-2">
                      <input type="checkbox" className="custom-control-input" id="customCheck1" defaultChecked={false} />
                      <label className="custom-control-label" htmlFor="customCheck1">
                        Send me the <Link to="#"> Newsletter</Link> weekly.
                      </label>
                    </div>
                    <button type="submit" className="btn btn-primary mb-4">
                      Sign In
                    </button>
                  </form>
                  <p className="mb-2">
                    Already have an account?{' '}
                    <NavLink to="/auth/signup" className="f-w-400">
                      Sign up
                    </NavLink>
                  </p>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignIn2;
