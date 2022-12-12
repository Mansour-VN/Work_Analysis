import propTypes from "prop-types";

export const Button = ({ text, type, Click, size }) => {
  return (
    <button className={`btn btn--${type} btn--${size}`} onClick={() => Click()}>
      {text}
    </button>
  );
};

Button.propTypes = {
  type: propTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "info",
    "warning",
  ]).isRequired,
  text: propTypes.string.isRequired,
  Click: propTypes.func,
  size: propTypes.oneOf(["small", "medium", "large"]),
};
