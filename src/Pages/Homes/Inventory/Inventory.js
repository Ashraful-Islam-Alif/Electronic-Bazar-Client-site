import React, { useEffect, useState } from "react";
import Items from "./Items/Items";

const Inventory = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://electronic-bazar-server-site.vercel.app/inventory")
      .then((res) => {
        console.log(res);
        return res.json();
      })

      .then((data) => setItems(data));
  }, []);

  return (
    <div className="container mb-5">
      <h1 className="text-primary fw-bold fst-italic text-center m-5">
        Inventory
      </h1>

      <div className="row">
        {items.map((item) => (
          <Items key={item._id} item={item}></Items>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
