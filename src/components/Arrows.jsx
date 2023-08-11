import Flecha from "../assets/Flecha.svg";

const Arrows = () => {
  const handleClick = (text) => {
    console.log(text);
  };

  return (
    <>
      <div className="flex flex-col w-20">
        <button
          onClick={() => handleClick("top")}
          className="bg-white rounded-md w-full pt-2"
        >
          <img src={Flecha} alt="arrow" className="w-5 mx-auto" />
        </button>
        <div className="flex">
          <button onClick={() => handleClick("left")} className="bg-white w-24">
            <img
              src={Flecha}
              alt="arrow"
              className="w-5 mx-auto origin-center -rotate-90"
            />
          </button>
          <button
            onClick={() => handleClick("right")}
            className="bg-white w-24"
          >
            <img
              src={Flecha}
              alt="arrow"
              className="w-5 mx-auto origin-center rotate-90"
            />
          </button>
        </div>
        <button
          onClick={() => handleClick("bottom")}
          className="bg-white w-full rounded-md pb-2"
        >
          <img
            src={Flecha}
            alt="arrow"
            className="w-5 mx-auto origin-center rotate-180"
          />
        </button>
      </div>
    </>
  );
};

export default Arrows;
