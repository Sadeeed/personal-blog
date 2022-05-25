const Button = (props) => {
  return (
    <>
      <button
        type="button"
        className={props.type === "submit" ? "submit-button" : "edit-button"}
        onClick={props.handleOnClick}
      >
        {props.buttonText}
      </button>
    </>
  );
};

export default Button;
