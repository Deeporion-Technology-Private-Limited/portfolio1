import React from "react";
import Form from "react-bootstrap/Form";
import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { common } from "../../configJson /common";

export default function ForgotPassword() {
  return (
    <>
      <Form>
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
                />
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
