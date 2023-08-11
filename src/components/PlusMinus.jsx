import Plus from "../assets/plus.svg";
import Minus from "../assets/minus.svg";

const PlusMinus = () => {
  const handleClick = (text) => {
    console.log(text);
  };

  return (
    <div className="flex flex-col bg-white rounded p-2 justify-between">
      <button onClick={() => handleClick("plus")} className="bg-white">
        <img src={Plus} alt="plus" className="w-5 mx-auto" />
      </button>
      <button onClick={() => handleClick("minus")} className="bg-white">
        <img src={Minus} alt="minus" className="w-5 mx-auto" />
      </button>
    </div>
  );
};

export default PlusMinus;
