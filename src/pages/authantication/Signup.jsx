import Form from "react-bootstrap/Form";
import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { common } from "../../configJson /common";
// import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const signUpSchema = Yup.object({
  name: Yup.string().min(3).max(25).required("Please Enter name"),
  email: Yup.string().required("Please Enter Email"),
  password: Yup.string().min(6).required("Please Enter Password")
});

export default function Signup() {
  const { values, errors, touched, handleSubmit, handleBlur, handleChange } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        console.log("Signup", values);
      },
    });

  // const [checked, setChecked] = useState(false);
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div>
          <Row>
            <Col lg={3}></Col>
            <Col xl={6} className="center-column">
              <h3 className="h-tag">{common.SignupTitle}</h3>
              <Form.Group>
                <Form.Label size="lg" className="form-label">
                  {common.Name}
                </Form.Label>
                <br />
                <Form.Control
                  type="text"
                  placeholder="User Name"
                  name="name"
                  size="lg"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name ? (
                  <Form.Label className="label-error">
                    *{errors.name}
                  </Form.Label>
                ) : null}
              </Form.Group>
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
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  size="lg"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                 { errors.password && touched.password ? (<Form.Label className="label-error">*{errors.password}</Form.Label>) : null}
                <Form.Group className="forgot-remember">
                  <Form.Check
                    type="checkbox"
                    label="I agree to all the Term, Privacy Policy."
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button className="login-button" type="submit">
                  {common.Signup}
                </Button>
              </Form.Group>
              <Form.Text>
                Already have an account? <Link to="/">{common.Login}</Link>
              </Form.Text>
            </Col>
            <Col lg={3}></Col>
          </Row>
        </div>
      </Form>
    </>
  );
}
