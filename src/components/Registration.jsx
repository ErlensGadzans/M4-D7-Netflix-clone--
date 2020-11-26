import React from "react";
import { Form, Col, Container, Row, Button } from "react-bootstrap";

class Registration extends React.Component {
  state = {
    form: {
      name: "",
      surname: "",
      email: "",
      password: "",
      dob: "",
      address: "",
      city: "",
      postcode: "",
    },
  };
  

  updateRegisterField = (e) => {
    let form = { ...this.state.form };
    let currentId = e.currentTarget.id;
    form[currentId] = e.currentTarget.value;
    this.setState({ form: form });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", this.state.form);
  };

  render() {
    return (
      <Container>
        <Row>
          <h1 className="my-5">Registration form:</h1>
        </Row>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label htmlFor="name">First Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                id="name"
                placeholder="Type your first name"
                minLength={2}
                required
                value={this.state.form.name}
                onChange={this.updateRegisterField}
              />
              <Form.Text muted>
                2 characters required!
              </Form.Text>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label htmlFor="surname">Surname</Form.Label>
              <Form.Control
                type="text"
                name="surname"
                id="surname"
                placeholder="Type your last name"
                minLength={3}
                required
                value={this.state.form.surname}
                onChange={this.updateRegisterField}
              />
              <Form.Text muted>
              3 characters required!
              </Form.Text>
            </Form.Group>
          
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label htmlFor="email">Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                id="email"
                placeholder="yourname@gmail.com"
                required
                value={this.state.form.email}
                onChange={this.updateRegisterField}
              />
            </Form.Group>
          
            <Form.Group as={Col}>
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                id="password"
                placeholder="Your password"
                minLength={8}
                required
                value={this.state.form.password}
                onChange={this.updateRegisterField}
              />
              <Form.Text muted>
              8 characters required!
              </Form.Text>
            </Form.Group>
          </Form.Row>
          <Form.Row>

          <Form.Group as={Col}>
              <Form.Label htmlFor="dob">Year of Birth</Form.Label>
              <Form.Control
                type="number"
                name="dob"
                id="dob"
                placeholder="1910"
                min="1910"
                max="2020"
                required
                value={this.state.form.dob}
                onChange={this.updateRegisterField}
              />
              <Form.Text muted>
                You must be younger than 110.
              </Form.Text>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label htmlFor="address">Street Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                id="address"
                placeholder="Your Street Address"
                required
                value={this.state.form.address}
                onChange={this.updateRegisterField}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label htmlFor="city">City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                id="city"
                placeholder="City"
                required
                value={this.state.form.city}
                onChange={this.updateRegisterField}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label htmlFor="postcode">Postal Code</Form.Label>
              <Form.Control
                type="number"
                name="postcode"
                id="postcode"
                placeholder="52011"
                minLength={5}
                maxLength={5}
                required
                value={this.state.form.postcode}
                onChange={this.updateRegisterField}
              />
              <Form.Text muted>5 numbers required.</Form.Text>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Button variant="success" type="submit">
                Register
              </Button>
            </Form.Group>
          </Form.Row>
        </Form>
      </Container>
    );
  }
}

export default Registration;