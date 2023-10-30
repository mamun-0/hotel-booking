import React from "react";
import SectionHeading from "../../SectionHeading/SectionHeading";
import HotelList from "../../HotelList/HotelList";
class Deluxe extends React.Component {
  render() {
    return (
      <div>
        <SectionHeading title="Deluxe Rooms" />
        <HotelList {...this.props} />
      </div>
    );
  }
}
export default Deluxe;
