import "./form.css";
function Button(props) {
  return (
    <>
      <button className={props.className} type={props.type}>
        {props.buttonContent}
      </button>
    </>
  );
}
export default Button;
