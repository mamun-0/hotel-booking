import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mobile: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Submission :", this.state);
    this.setState({
      name: "",
      mobile: "",
    });
    this.props.toggle();
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="p-3">
        <p className="display-6 underline text-center">Room Book Form</p>
        <FormGroup>
          <Label for="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="imput full name here"
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="mobile">Mobile Number</Label>
          <Input
            id="mobile"
            name="mobile"
            placeholder="imput mobile number here"
            type="text"
            onChange={this.handleChange}
            value={this.state.mobile}
            required
          />
        </FormGroup>
        <button className="btn btn-success">Book!☺</button>
      </Form>
    );
  }
}
export default OrderForm;
