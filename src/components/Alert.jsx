const Alert = (props) => {
  const { message, error } = props.error;

  return (
    <div
      className={`${
        error === true ? "bg-red-500 absolute inset-1/2" : "bg-green-300"
      } text-white rounded-md p-4 w-40 flex items-center justify-center`}
    >
      <p className="">{message}</p>
    </div>
  );
};

export default Alert;
