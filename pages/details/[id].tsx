import Comments from "@components/details/Comments";
import Navbar from "@components/Navbar";

const ItemDetails = () => {
  return (
    <section className="min-h-screen flex items-center py-20 bg-light_gray">
      <Navbar />
      <div className="xl:max-w-screen-xl  px-2 mx-auto">
        <div className="grid lg:grid-cols-2 lg:grid-rows-2 grid-cols-1  gap-8">
          <div className="self-center">
            <h1 className="font-main text-2xl font-bold capitalize mb-2">
              Margarita
            </h1>
            <p className="text-md font-poppins text-gray-500 leading-normal mb-4">
              And a search for 'lorem ipsum' will uncover many web sites still
              in their infancy. Various versions have evolved over the years,
              sometimes by accident,
            </p>
            <h2 className="font-main text-xl font-bold capitalize">
              Margarita
            </h2>
            <p className="text-md font-poppins text-gray-500 leading-normal mb-4">
              Onion / Mushroum / Tomato / Pepper / cheese / Fish
            </p>
          </div>
          <div className="xl:row-span-2 self-center justify-self-center">
            <img src="/images/pizza.png" alt="pizza" />
            <div className="flex justify-between items-center mt-6 flex-col sm:flex-row">
              <div className="flex space-x-6">
                <h2 className="font-main text-xl font-bold capitalize">
                  Size :
                </h2>
                {["M", "L", "XL"].map((size, index) => (
                  <button
                    key={`${size}-${index}`}
                    className="w-8 h-8 bg-secondary font-main font-bold text-md rounded-lg mr-2"
                  >
                    {size}
                  </button>
                ))}
              </div>
              <div className="flex space-x-2 items-center">
                <h2 className="font-main text-xl font-bold capitalize mb-2">
                  Quantity :
                </h2>
                <button className="w-8 h-8 bg-secondary font-main font-bold text-md rounded-lg">
                  +
                </button>
                <p>1</p>
                <button className="w-8 h-8 bg-secondary font-main font-bold text-md rounded-lg">
                  -
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4 flex-col sm:flex-row">
              <p className="text-md font-main text-xl  text-gray-900 leading-normal ">
                Price: 30$
              </p>
              <button className=" focus:outline-none transition-all hover:shadow-btn_lg shadow-btn  px-4 py-2 font-bold rounded bg-primary text-white font-main uppercase">
                place order
              </button>
            </div>
          </div>
          <div className="xl:col-span-1 lg:col-span-2">
            <Comments />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetails;
