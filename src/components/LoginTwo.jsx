import React from "react";
import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { common } from "../configJson/common";

const initialValues = {
//   name: "",
  email: "",
  password: "",
};

export default function LoginTwo() {
  const {values, errors, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: initialValues,
    onsubmit: (values) => {
      console.log("", values);
    },
  });
  return (
    <>
      <h2>LoginTwo formik </h2>

      <Form onClick={handleSubmit}>
        <div
          className="main-container"
          style={{ width: "100%", marginTop: "5rem" }}
        >
          <Row>
            {/* {t('key')}  */}
            <Col lg={3}></Col>
            <Col xl={6} className="center-column">
              <div className="h-tag">
                <h3>{common.LoginPageTitle}</h3>
              </div>
              <Form.Group>
                <Form.Label size="lg" className="form-label">
                  {common.Email}
                </Form.Label>
                <br />
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="user@deeporion.com"
                  size="lg"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Label className="form-label">
                  {common.Password}
                </Form.Label>
                <br />
                <Form.Control
                  type="Password"
                  name="password"
                  placeholder="Password"
                  size="lg"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Form.Group className="forgot-remember">
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Form.Check
                      type="checkbox"
                      label="Remember me"
                      name="checkbox"
                      
                    />
                    <Form.Text>
                      <Link to="/ForgotPassword">{common.ForgotPassword}</Link>
                    </Form.Text>
                  </div>
                </Form.Group>
                onClick={}
                <Button className="login-button" type="submit ">
                  {common.Login}
                </Button>
              </Form.Group>
              <Form.Text className="signup-link">
                Don't have an account? <Link to="/Signup">{common.Signup}</Link>
              </Form.Text>
            </Col>
            <Col lg={3}></Col>
          </Row>
        </div>
      </Form>
    </>
  );
}
