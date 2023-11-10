import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { Form, FormGroup, Label, Input } from "reactstrap";
class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mobile: "",
      placeOrder: false,
      auth: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { description, features, url, price } = this.props;
    const resObject = {
      description,
      features,
      url,
      price,
      isBooked: true,
      owner: { name: this.state.name, mobile: this.state.mobile },
    };
    await axios.put(
      `http://localhost:3001${window.location.pathname}/${this.props.id}`,
      resObject
    );

    this.setState({
      name: "",
      mobile: "",
    });
    this.props.bookingRender();
    this.props.toggle();
  }
  phoneValidity(mobileNum) {
    const phoneNumberRegEx = /^(\+?880|0)1[345678]\d{8}$/;
    return phoneNumberRegEx.test(mobileNum);
  }
  handleChange(e) {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        const isValidPhone = this.phoneValidity(this.state.mobile);
        if (isValidPhone && this.state.name) {
          this.setState({ placeOrder: true });
        } else {
          this.setState({ placeOrder: false });
        }
      }
    );
  }
  bookButtonUI() {
    if (!this.state.placeOrder) {
      return (
        <button className="btn btn-success" disabled>
          Book now!☺
        </button>
      );
    } else {
      return <button className="btn btn-success">Book now!☺</button>;
    }
  }
  isLoggedIn() {
    if (this.props.storeSignIn) {
      return this.props.storeSignIn;
    } else if (this.props.storeSignUp) {
      return this.props.storeSignUp;
    } else {
      return null;
    }
  }
  componentDidMount() {
    this.setState({
      auth: this.isLoggedIn(),
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
        {this.bookButtonUI()}
      </Form>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(OrderForm);
