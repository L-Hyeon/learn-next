import React from "react";

function page() {
  return (
    <ul>
      {[...Array(5)].map((val, idx) => {
        return <ListItem />;
      })}
    </ul>
  );
}

export default page;

function ListItem() {
  return <li>Hello I am List Item!</li>;
}
