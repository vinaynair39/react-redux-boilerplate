
import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import PublicNavbar from "components/Navbars/PublicNavbar.jsx";
import { Link } from "react-router-dom";
import { useRegisterForm } from "../util/hooks";
import { startSignUp } from "../actions/auth";

const RegisterPage = (props) => {

  const [state, setState] = useState({
    squares1to6: "",
    squares7and8: ""
  });
  const [show, setShow] = useState(false);
  const [focus, setFocus] = useState({
    fullNameFocus: false,
    emailFocus: false,
    passwordFocus: false,
    confirmPasswordFocus: false
  });

  const { onChange, onSubmit, values, error, formError } = useRegisterForm(startSignUp, {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    document.documentElement.addEventListener("mousemove", followCursor);
  }, []);

  const followCursor = event => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setState({
      squares1to6:
        "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)",
      squares7and8:
        "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    });
  };

  return (
    <div className="register-page animated fadeIn">
      <PublicNavbar />
      <div className="wrapper">
        <div className="page-header">
          <div className="page-header-image" />
          <div className="content">
            <Container>
              <Row >
                <Col className="offset-lg-0 offset-md-3" xl="6" lg="6" md="6">
                  <div
                    className="square square-7"
                    id="square7"
                    style={{ transform: state.squares7and8 }}
                  />
                  <div
                    className="square square-8"
                    id="square8"
                    style={{ transform: state.squares7and8 }}
                  />
                  <Card className="card-register animated fadeInLeft">
                    <CardHeader>
                      <CardImg
                        alt="..."
                        src={require("assets/img/square-purple-1.png")}
                      />
                      <CardTitle style={{ marginLeft: "0.2rem" }} tag="h4">Register</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form className="form">
                        <InputGroup style={{ marginBottom: "2vh" }}
                          className={classnames({
                            "input-group-focus": focus.fullNameFocus,
                            "has-danger": formError.name.length > 0 && 'has-danger'
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Full Name"
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={onChange}
                            onFocus={e =>
                              setFocus({ ...state, fullNameFocus: true })
                            }
                            onBlur={e =>
                              setFocus({ ...state, fullNameFocus: false })
                            }
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": focus.emailFocus,
                            "has-danger": formError.email.length > 0 && 'has-danger'
                          })}
                          style={{ marginBottom: "2vh" }}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email"
                            name="email"
                            value={values.email}
                            onChange={onChange}
                            type="text"
                            onFocus={e => setFocus({ ...state, emailFocus: true })}
                            onBlur={e => setFocus({ ...state, emailFocus: false })}
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": focus.passwordFocus,
                            "has-danger": formError.password.length > 0 && 'has-danger'
                          })}
                          style={{ marginBottom: "2vh" }}

                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-lock-circle" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            name="password"
                            value={values.password}
                            onChange={onChange}
                            placeholder="Password"
                            type={show ? "text" : "password"}
                            onFocus={e =>
                              setFocus({ ...state, passwordFocus: true })
                            }
                            onBlur={e =>
                              setFocus({ ...state, passwordFocus: false })
                            }
                          />
                          <div className="input-group-append">
                            <button onClick={(e) => {
                              e.preventDefault();
                              setShow(!show)
                            }}>
                              <i className="tim-icons icon-lock-circle" />
                            </button>
                          </div>
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": focus.confirmPasswordFocus,
                            "has-danger": !!error && 'has-danger'
                          })}
                          style={{ marginBottom: "3vh" }}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-lock-circle" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                           name="confirmPassword"
                           value={values.confirmPassword}
                           onChange={onChange}
                            placeholder="Confirm Password"
                            type={show ? "text" : "password"}
                            onFocus={e =>
                              setFocus({ ...state, confirmPasswordFocus: true })
                            }
                            onBlur={e =>
                              setFocus({ ...state, confirmPasswordFocus: false })
                            }
                          />
                          <div className="input-group-append">
                            <button onClick={(e) => {
                              e.preventDefault();
                              setShow(!show)
                            }}>
                              <i className="tim-icons icon-lock-circle" />
                            </button>
                          </div>
                        </InputGroup>
                      </Form>
                      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Button onClick={onSubmit} color="primary">Register</Button>
                      </div>
                    </CardBody>
                    <CardFooter style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", margin: "0", paddingTop: "0" }}>
                      <Button className="btn-round" color="warning" >
                        sign up via <FontAwesomeIcon icon={faGoogle} size={'lg'} className="form-icon" />
                      </Button>
                      <Label style={{ fontSize: "1.2rem" }} check>
                        Already Registed?{" "}
                        <Link
                          to="/login"
                        >
                          Sign In
                              </Link>
                      </Label>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
              <div className="register-bg" />
              <div
                className="square square-1"
                id="square1"
                style={{ transform: state.squares1to6 }}
              />
              <div
                className="square square-2"
                id="square2"
                style={{ transform: state.squares1to6 }}
              />
              <div
                className="square square-3"
                id="square3"
                style={{ transform: state.squares1to6 }}
              />
              <div
                className="square square-4"
                id="square4"
                style={{ transform: state.squares1to6 }}
              />
              <div
                className="square square-5"
                id="square5"
                style={{ transform: state.squares1to6 }}
              />
              <div
                className="square square-6"
                id="square6"
                style={{ transform: state.squares1to6 }}
              />
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
