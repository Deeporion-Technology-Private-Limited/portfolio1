import Form from "react-bootstrap/Form";
import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { common } from "../../configJson /common";
import { useState } from "react";

export default function Signup() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  console.log("SignUP checked", checked);
  return (
    <>
      <Form>
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
                />
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
                  placeholder="Enter Password"
                  name="password"
                  size="lg"
                />
                <Form.Group className="forgot-remember">
                  <Form.Check
                    type="checkbox"
                    label="I agree to all the Term, Privacy Policy."
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button className="login-button" type="submit">{common.Signup}</Button>
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
