import React from "react";
import Form from "react-bootstrap/Form";
import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { common } from "../../configJson /common";
import { useFormik } from "formik";
import * as Yup from "yup"

const initialValues = {
  email: ""
};

const forgotSchema = Yup.object({
    email: Yup.string().email().required("Please enter a valid email address")
})

export default function ForgotPassword() {
  const {values, errors, touched ,handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: forgotSchema,
    onSubmit: (values) => {
      console.log("Forgot password", values);
    },
  });
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div>
          <Row>
            {/* {t('key')} */}
            <Col lg={3}></Col>
            <Col xl={6} className="center-column">
              <h3 className="h-tag">{common.ForgotPassword}</h3>
              <Form.Group>
                <Form.Label size="lg" className="form-label" name="email">
                  {common.Email}
                </Form.Label>
                <br />
                <Form.Control
                  type="email"
                  placeholder="user@deeporion.com"
                  size="lg"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                { errors.email && touched.email ? (<Form.Label className="label-error">*{errors.email}</Form.Label>): null }
              </Form.Group>
              <br />
              <Button className="login-button" type="submit">
                {common.ResetPassword}
              </Button>
              <Form.Group>
                <Form.Text>
                  <Link to="/Signup">{common.BackToLogin}</Link>
                </Form.Text>
              </Form.Group>
            </Col>
            <Col lg={3}></Col>
          </Row>
        </div>
      </Form>
    </>
  );
}
