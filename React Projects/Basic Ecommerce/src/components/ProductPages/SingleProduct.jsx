import { useOutletContext, useParams } from "react-router-dom";

const SingleProduct = () => {
  const { productId } = useParams();
  const { productData } = useOutletContext();

  const product = productData.find((item) => item.id === Number(productId));
  if (!product) return <h2>Product not found</h2>;
  return (
    <div className="px-2 sm:px-4 sm:py-3 md:px-6 lg:px-32">
      <div className=" md:flex border">
        <div className=" border-b md:w-1/2 md:border-0 p-8 flex flex-col items-center ">
          <img
            className="w-100 h-100 md:w-120 md:h-120 object-contain"
            src={product.image}
            alt=""
          />
        </div>

        <div className="md:border-l md:w-1/2 md:flex md:flex-col md:justify-between">
          <div>
            <h1 className="text-3xl md:text-5xl md:leading-14 capitalize p-2 md:p-6">
              {product.title}
            </h1>
            <div className="flex justify-between border-y p-2 md:p-6 items-center">
              <h1 className="text-2xl md:text-3xl font-bold">
                ${product.price}
              </h1>
              <p className="capitalize md:text-xl">{product.category}</p>
            </div>
            <p className="p-2 md:p-6 md:text-xl">{product.description}</p>
          </div>

          <button className=" md:text-xl w-full border-t mt-4 p-3 hover:bg-primary hover:text-secondary duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
