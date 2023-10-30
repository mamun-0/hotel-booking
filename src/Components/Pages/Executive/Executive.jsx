import React from "react";
import SectionHeading from "../../SectionHeading/SectionHeading";
import HotelList from "../../HotelList/HotelList";
class Executive extends React.Component {
  render() {
    return (
      <div>
        <SectionHeading title="Executive Rooms" />
        <HotelList {...this.props} />
      </div>
    );
  }
}
export default Executive;
