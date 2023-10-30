import React from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Hotel from "../Hotel/Hotel";
// import "./HotelList.css";
class HotelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  async componentDidMount() {
    const { path } = this.props.match;
    const url = `http://localhost:3001${path}`;
    const { data } = await axios.get(url);
    this.setState({ data });
  }
  render() {
    let hotel = null;
    if (this.state.data) {
      hotel = this.state.data.map((hotel) => {
        return (
            <Hotel key={uuidv4()} {...hotel} />
        );
      });
    }
    return <div className="row d-flex flex-row justify-content-center">{hotel}</div>;
  }
}
export default HotelList;
