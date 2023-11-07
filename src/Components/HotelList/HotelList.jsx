import React from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Hotel from "../Hotel/Hotel";
import { connect } from "react-redux";
import { CountRoom } from "../../action/CountRoom";
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
  componentDidUpdate() {
    let totalRoom = 0;
    this.state.data.forEach((room) => {
      if (!room.isBooked) {
        totalRoom += 1;
      }
    });
    this.props.CountRoom(totalRoom);
  }
  render() {
    let hotel = null;
    if (this.state.data) {
      hotel = this.state.data.map((hotel) => {
        return <Hotel key={uuidv4()} {...hotel} />;
      });
    }
    return (
      <div className="row d-flex flex-row justify-content-center">{hotel}</div>
    );
  }
}
const mapStateToProps = (state) => {
  return { remainingRoom: state.remainingRoom };
};

export default connect(mapStateToProps, { CountRoom })(HotelList);
