import React from "react";
import "./Button.css";

const Button = ({ total, page, setPage }) => {
  return (
    <div className="buttons">
      <button
        onClick={() => {
          setPage((curr) => {
            if (curr > 1) {
              return curr - 1;
            } else {
              return curr;
            }
          });
        }}
        className="prev"
      >
        Prev
      </button>
      <span className="button.span">{page}</span>
      <button
        onClick={() => {
          setPage((curr) => {
            if (total > curr) {
              return curr + 1;
            } else {
              return curr;
            }
          });
        }}
        className="next"
      >
        Next
      </button>
    </div>
  );
};
export default Button;