import Image from "next/image";
import React from "react";
import Next from "public/next.svg";

function page() {
  return (
    <ul>
      {[...Array(5)].map(() => {
        return <CartItem />;
      })}
    </ul>
  );
}

export default page;

function CartItem() {
  return (
    <li>
      <img src="/vercel.svg" width={"200px"} />I am Cart Item!
      <Image src={Next} alt={"next"} width={200} />
    </li>
  );
}
