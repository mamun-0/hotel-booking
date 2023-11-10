import "./SectionHeading.css";
const SectionHeading = (props) => {
  return (
    <p className="display-5 p-2 text-center underline" style={{letterSpacing:'2px'}}>
      {props.title || "Unknown"}
    </p>
  );
};
export default SectionHeading;
