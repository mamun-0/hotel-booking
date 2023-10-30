import React from "react";
import HotelList from "../../HotelList/HotelList";
import SectionHeading from "../../SectionHeading/SectionHeading";
class Standard extends React.Component {
  render() {
    return (
      <div>
        <SectionHeading title="Standard Rooms" />
        <HotelList {...this.props} />
      </div>
    );
  }
}
export default Standard;
