import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Mutation } from "react-apollo";
import { SIGNUP_USER } from "../queries";
import Error from "../Components/Error";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import Logoletter from "../assets/images/pslogo_letter_only.png";
import { render } from "react-dom";
import ReactSVG from "react-svg";
import Leaf from "../assets/images/leaf.svg";
import { relative } from "path";

const initialState = {
  username: "",
  email: "",
  password: "",
  passwordConfirmation: ""
};

class LoginBtn extends Component {
  state = { ...initialState };

  clearState = () => {
    this.setState({ ...initialState });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event, signupUser) => {
    event.preventDefault();
    signupUser().then(async ({ data }) => {
      console.log(data);
      localStorage.setItem("token", data.signupUser.token);
      await this.props.refetch();
      this.clearState();
      this.props.history.push("/main");
    });
  };

  validateForm = () => {
    const { username, email, password, passwordConfirmation } = this.state;
    const isInvalid =
      !username || !email || !password || password !== passwordConfirmation;
    return isInvalid;
  };

  render() {
    const { username, email, password, passwordConfirmation } = this.state;

    return (
      <div>
       
        <Mutation
          mutation={SIGNUP_USER}
          variables={{ username, email, password }}
        >
          {(signupUser, { data, loading, error }) => {
            // 450F42
            return (
              <div className="modalFix">
                <Modal
                  trigger={
                    <Button
                      style={{
                        position:"relative",
                        backgroundColor: "#450F42",
                        color: "white",
                        width: 330,
                        height: 50,
                        marginBottom:30,
                        marginTop:110
                      }}
                    >
                      SIGN UP
                    </Button>
                  }
                >
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: 20,
                      height: 50,
                      verticalAlign: "middle",
                      lineHeight: 2.5
                    }}
                  >
                    <div id="" />
                    <br />
                  </div>
                  <ReactSVG src={{ Leaf }} />
                  <Modal.Content image>
                    <form
                      onSubmit={event => this.handleSubmit(event, signupUser)}
                    >
                      <div className="signupForm">
                        <span style={{ fontSize: 18 }}>
                          Fill out the details below to sign up!
                        </span>
                        <br />
                        <br />
                        <input
                          className="signupInput"
                          type="text"
                          name="username"
                          placeholder="Username"
                          value={username}
                          onChange={this.handleChange}
                        />
                        <br />
                        <input
                          className="signupInput"
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={email}
                          onChange={this.handleChange}
                        />
                        <br />
                        <input
                          className="signupInput"
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={password}
                          onChange={this.handleChange}
                        />
                        <br />
                        <input
                          className="signupInput"
                          type="password"
                          name="passwordConfirmation"
                          placeholder="Confirm Password"
                          value={passwordConfirmation}
                          onChange={this.handleChange}
                        />
                        <br />
                        <button
                          className="submitBtn"
                          style={{
                            backgroundColor: "#450F42",
                            color: "white",
                            width: 330,
                            height: 50
                          }}
                          type="submit"
                          disabled={loading || this.validateForm()}
                        >
                          SUBMIT
                        </button>
                      </div>
                      {/* Display error message if there is an error */}
                      {error && <Error error={error} />}
                    </form>
                  </Modal.Content>
                </Modal>
              </div>
            );
          }}
        </Mutation>
      </div>
    );
  }
}

export default withRouter(LoginBtn);
