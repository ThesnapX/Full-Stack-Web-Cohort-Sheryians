import { Link } from "react-router-dom";

const ProductsList = ({ productData }) => {
  return (
    <div
      className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))]
  sm:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]
  lg:grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4 mt-2 px-2 sm:px-4 sm:py-3 md:px-6 lg:px-32"
    >
      {productData.map((item) => (
        <Link to={`/product/${item.id}`} key={item.id}>
          <div className="border flex flex-col items-center justify-between ">
            <img className="w-50 p-4 cover h-50" src={item.image} alt="" />
            <div className="w-full border-t p-2 text-sm ">
              <h1>{item.title}</h1>
            </div>
            <div className="w-full flex justify-between p-2  border-t">
              <h1 className=" text-xl font-bold">${item.price}</h1>
              <p className="capitalize text-end text-sm mt-1">
                {item.category}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductsList;
