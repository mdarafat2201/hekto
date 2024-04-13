import React from "react";

const Button = ({ className, title }) => {
  return (
    <>
      <button
        className={
          className
            ? className
            : "p-5  bg-secondary_font_color text-main_bg_color"
        }
      >
        {title ? title : "nei"}
      </button>
    </>
  );
};

export default Button;
