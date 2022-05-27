import React from "react";
import ReactStars from "react-rating-stars-component";

export const RatingBar = ({
  children,
  className,
  value = 1,
  starCount = 5,
  color = "grey",
  activeColor = "red",
  ...restProps
}) => {
  return (
    <>
      <ReactStars
        edit={false}
        classNames={className}
        count={starCount}
        isHalf={false}
        value={value}
        color={color}
        activeColor={activeColor}
        {...restProps}
      />
      {children}
    </>
  );
};
