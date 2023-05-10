import "./form.css";
function Input(props) {
  return (
    <div className="input">
      <label htmlFor={props.labelName}>{props.labelContent} </label>
      <input
        type={props.inputType}
        name={props.inputName}
        placeholder={props.inputPlaceholder}
        value={props.inputValue}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Input;
