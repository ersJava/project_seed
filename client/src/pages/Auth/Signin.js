import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Mutation } from "react-apollo";
import { SIGNIN_USER } from "../../queries";
import Error from "../../Components/Error";
import { Button, Header, Image, Modal } from "semantic-ui-react";

const initialState = {
  username: "",
  password: ""
};

class Signin extends Component {
  state = { ...initialState };

  clearState = () => {
    this.setState({ ...initialState });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event, signinUser) => {
    event.preventDefault();
    signinUser().then(async ({ data }) => {
      console.log(data);
      localStorage.setItem("token", data.signinUser.token);
      await this.props.refetch();
      this.clearState();
      this.props.history.push("/main");
    });
  };

  validateForm = () => {
    const { username, password } = this.state;
    const isInvalid = !username || !password;
    return isInvalid;
  };

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <h2>Sign in</h2>
        <Mutation mutation={SIGNIN_USER} variables={{ username, password }}>
          {(signinUser, { data, loading, error }) => {
            return (
              <Modal
                trigger={
                  <Button
                    style={{
                      backgroundColor: "white",
                      border: "solid #450F42",
                      color: "#450F42",
                      width: 330,
                      height: 50
                    }}
                  >
                    LOG IN
                  </Button>
                }
              >
                <Modal.Content image>
                  <form
                    onSubmit={event => this.handleSubmit(event, signinUser)}
                  >
                    <span style={{ fontSize: 18 }}>
                      Log in with your details.
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
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={password}
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
                      LOG IN
                    </button>

                    {/* Display error message if there is an error */}
                    {error && <Error error={error} />}
                  </form>
                </Modal.Content>
              </Modal>
            );
          }}
        </Mutation>
      </div>
    );
  }
}

export default withRouter(Signin);
