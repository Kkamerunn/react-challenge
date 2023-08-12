import { useState, useEffect } from "react";
import Products from "./Products";
import Alert from "./Alert";
import Aberturas from "../assets/Aberturas.svg";
import Equipamiento from "../assets/Equipamiento.svg";
import Terminaciones from "../assets/Terminaciones.svg";
import Activo from "../assets/activo.svg";
import axios from "axios";

const Navbar = () => {
  const [activeSidebar, setActiveSidebar] = useState(false);
  const [productCategory, setProductCategory] = useState("");
  const [products, setProducts] = useState({});
  const [error, setError] = useState({
    message: "",
    error: false,
  });

  const getProducts = async (type) => {
    try {
      const { data } = await axios(
        `https://us-central1-prueba-front-280718.cloudfunctions.net/${type}`
      );
      setProducts(data);
      setProductCategory(type);
    } catch (err) {
      setError({
        message: err.message,
        error: true,
      });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setError({
        message: "",
        error: false,
      });
    }, 5000);
  }, [error]);

  const openSidebar = (type) => {
    getProducts(type.toLowerCase());
    setActiveSidebar(true);
  };

  const closeSidebar = () => {
    setActiveSidebar(false);
    setProductCategory("");
    setProducts({});
  };

  return (
    <>
      <div className="flex h-full overflow-x-hidden">
        <div className="bg-white flex flex-col justify-center w-24 h-full z-50">
          <button
            onClick={() => openSidebar("Aberturas")}
            className="my-4 flex flex-col gap-1 justify-center items-center"
          >
            <img src={Aberturas} alt="Aberturas" className="w-10" />
            <small className="text-center">Aberturas</small>
          </button>
          <button
            onClick={() => openSidebar("Equipamiento")}
            className="my-4 flex flex-col gap-1 justify-center items-center"
          >
            <img src={Equipamiento} alt="Equipamiento" className="w-10" />
            <small className="text-center">Equipamiento</small>
          </button>
          <button
            onClick={() => openSidebar("Terminaciones")}
            className="my-4 flex flex-col gap-1 justify-center items-center"
          >
            <img src={Terminaciones} alt="Terminaciones" className="w-10" />
            <small className="text-center">Terminaciones</small>
          </button>
        </div>
        {/** SIDEBAR */}
        <div
          id="sidebar"
          className={`p-6 bg-slate-100 relative w-96 z-0 h-full transition-transform duration-300 ease-in-out origin-left ${
            activeSidebar === true ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {products && (
            <Products products={products} productCategory={productCategory} />
          )}
          <button
            onClick={closeSidebar}
            className={`bg-slate-100 absolute w-5 h-16 ${
              activeSidebar === true ? "-right-5" : "right-0"
            } inset-y-1/2`}
          >
            <img src={Activo} alt="deactive button" className="w-4" />
          </button>
        </div>
      </div>
      {error !== null ? <Alert error={error} /> : null}
    </>
  );
};

export default Navbar;
