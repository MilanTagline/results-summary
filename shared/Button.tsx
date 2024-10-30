import clsx from "clsx";
import React from "react";

type ButtonProps = React.ComponentProps<"button"> & {};

const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "p-3 bg-dark-gray-blue text-white rounded-full hover:bg-gradient-to-b hover:from-light-slate-blue hover:to-light-royal-blue",
        props.className
      )}
    />
  );
};

export default Button;
