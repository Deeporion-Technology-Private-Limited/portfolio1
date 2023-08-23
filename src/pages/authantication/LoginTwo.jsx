import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup"
import Form from "react-bootstrap/Form";
import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { common } from "../../configJson /common";

const initialValues = {
  email: "",
  password: "",
};

const loginSchema = Yup.object({
    email: Yup.string().email().required("Please enter a valid email address"),
    password: Yup.string().min(6).required("Please enter a valid password")
})

export default function LoginTwo() {
  const {values, errors, touched ,handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log("onsubmit values", values);
    },
  });
  return (
    <>
      <h2>LoginTwo formik </h2>

      <Form onSubmit={handleSubmit}>
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
                { errors.email && touched.email ? (<Form.Label className="label-error">*{errors.email}</Form.Label>): null }
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
                { errors.password && touched.password ? (<Form.Label className="label-error">*{errors.password}</Form.Label>) : null}
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
