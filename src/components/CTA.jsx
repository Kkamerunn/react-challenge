const CTA = ({ text }) => {
  const handleClick = () => {
    console.log(`clicked on ${text}`);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-white w-24 p-2 rounded-md text-slate-400"
    >
      {text}
    </button>
  );
};

export default CTA;
