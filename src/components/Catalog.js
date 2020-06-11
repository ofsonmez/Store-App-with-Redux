import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/actions";
const ids = [
  "elma",
  "armut",
  "çilek",
  "karpuz",
  "dut",
  "kavun",
  "limon",
  "nane",
];

const products = ids.map((id, index) => ({ id, price: index + 1 }));

const Catalog = () => {
  const dispatch = useDispatch();

  return (
    <div className="catalog">
      <div className="products">
        {products.map((p) => (
          <div key={p.id} className="product">
            <h4>
              {p.id} / ${p.price}
            </h4>
            <button
              className="ui button positive mini"
              onClick={() => {
                dispatch(addItem(p));
              }}
            >
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
