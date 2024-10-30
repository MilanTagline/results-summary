import React from "react";

type ButtonProps = React.ComponentProps<"button"> & {};

const Button = (props: ButtonProps) => {
  return <button {...props} />;
};

export default Button;
