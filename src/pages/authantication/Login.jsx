import Form from "react-bootstrap/Form";
import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import {useTranslation} from 'i18n'
import { common } from "../../configJson /common";
import { useState } from "react";
// import Helper from "../../Helper/helper"


function ContainerExample() {
  const [checked, setChecked] = useState(false);

  // const {t,i18n} = useTranslation('translation');
  // const change = ()=> {
  //   console.warn('Function Called')
  //   i18n.ChangeLanguage('hindi')
  // }

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleLogin = async () => {
    // const apiUrl = apiUrl.Login
    // const {response, status } = await Helper.post()
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  console.log("checked", checked);
  return (
    <> 
    <h1 style={{textAlign:"center"}}>Login</h1>
   
      {/* <Form onClick={onSubmit}>
        <div
          className="main-container"
          style={{ width: "100%", marginTop: "5rem" }}
        >
          <Row>
            {/* {t('key')} */}
            {/* <Col lg={3}></Col>
            <Col xl={6} className="center-column">
            <div className="h-tag">

            <h3>{common.LoginPageTitle}</h3>
            </div>
              <Form.Group>
                <Form.Label size="lg" className="form-label" >
                  {common.Email}
                </Form.Label>
                <br /> */}
                {/* <Form.Control
                  type="email"
                  name="email"
                  placeholder="user@deeporion.com"
                  size="lg"
                />
              </Form.Group>
              <br /> */}
              {/* <Form.Group>
                <Form.Label className="form-label" >
                  {common.Password}
                </Form.Label>
                <br />
                <Form.Control
                  type="Password"
                  name="password"
                  placeholder="Password"
                  size="lg"
                />
                <Form.Group className="forgot-remember">
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Form.Check
                      type="checkbox"
                      label="Remember me"
                      name= "checkbox"
                      onChange={handleChange}
                    />
                    <Form.Text>
                      <Link to="/ForgotPassword">{common.ForgotPassword}</Link>
                    </Form.Text>
                  </div>
                </Form.Group>
                {/* onClick={handleLogin()} */}
                {/* <Button className="login-button" type="submit ">{common.Login}</Button>
              </Form.Group>
              <Form.Text className="signup-link">
                Don't have an account? <Link to="/Signup">{common.Signup}</Link>
              </Form.Text>
            </Col> */}
            {/* <Col lg={3}></Col> */}
          {/* </Row> */}
        {/* </div> */}
      {/* </Form> */}
     </> 
  );
}
export default ContainerExample;
