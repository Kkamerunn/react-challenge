const Product = ({ product }) => {
  return (
    <div>
      <img src={product.img} alt={product.name} className="w-24 h-24" />
      <small className="text-slate-400 text-xs inline-block w-full text-center">
        {product.name}
      </small>
    </div>
  );
};

export default Product;
