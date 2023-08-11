import { useState, useEffect } from "react";
import Product from "./Product";
import Activo from "../assets/activo.svg";

const Products = ({ products, productCategory }) => {
  const [activeProducts, setActiveProducts] = useState({
    name: "",
    isActive: false,
  });

  useEffect(() => {
    deactive();
  }, [products]);

  const showProducts = (name) => {
    setActiveProducts({
      name,
      isActive: true,
    });
  };

  const deactive = () => {
    setActiveProducts({
      name: "",
      isActive: false,
    });
  };

  return (
    <>
      <div className="flex items-center">
        {activeProducts.isActive ? (
          <button
            onClick={deactive}
            className="text-xs pt-0 mb-0 text-slate-400 flex items-center"
          >
            <img src={Activo} alt="arrow" className="w-2 mr-1" />
            {productCategory}
          </button>
        ) : (
          <h2 className="pt-2 pl-2 text-slate-600 font-semibold mb-3">
            {productCategory}
          </h2>
        )}
      </div>

      {products.length
        ? products.map((item) => (
            <div key={item.name}>
              {activeProducts.name === item.name ? (
                <p className="text-slate-400 mt-4">{item.name}</p>
              ) : null}
              {!activeProducts.isActive && (
                <div className="p-3 bg-white rounded-md flex justify-between my-4">
                  <p className="text-slate-400">{item.name}</p>
                  <button onClick={() => showProducts(item.name)}>
                    <img
                      src={Activo}
                      alt="arrow"
                      className="w-5 origin-center rotate-180"
                    />
                  </button>
                </div>
              )}
              <div className="mt-3 flex justify-between">
                {activeProducts.isActive && activeProducts.name === item.name
                  ? item.items.map((el) => (
                      <Product key={el.name} product={el} />
                    ))
                  : null}
              </div>
            </div>
          ))
        : "There are no products at the moment"}
    </>
  );
};

export default Products;
