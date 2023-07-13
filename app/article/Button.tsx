"use client";

import React from "react";

type Props = {};

const Button = (props: Props) => {
  return (
    <>
      <a href="/article/new">
        <div className="button">등록하기</div>
      </a>
      <style jsx>
        {`
          a {
            color: inherit;
            text-decoration: none;
          }
          .button {
            color: slategray;
            width: 150px;
            height: 50px;
            border: 1px solid slategrey;
            border-radius: 10px;
            font-size: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </>
  );
};

export default Button;
