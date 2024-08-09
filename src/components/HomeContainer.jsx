import React from "react";

import Delivery from "../images/delivery.png";
import HeroBg from "../images/heroBg.png";
import Cake from "../images/cake.png";
import Pizza from "../images/pizza.png";
import Kebab from "../images/kebab.png";
import Biryani from "../images/biryani.png";

const heroData = [
  {
    id: 1,
    name: "Cake",
    desc: "Chocolate & Vanilla",
    price: "90",
    imageSrc: Cake,
  },
  {
    id: 2,
    name: "Pizza",
    desc: "Fresh Pizza",
    price: "120",
    imageSrc: Pizza,
  },
  {
    id: 3,
    name: "Chicken Kebab",
    desc: "Mixed Kebab Plate",
    price: "170",
    imageSrc: Kebab,
  },
  {
    id: 4,
    name: "Biryani",
    desc: "Chicken Dum Biryani",
    price: "150",
    imageSrc: Biryani,
  },
];

const HomeContainer = () => {
  return (
    <section
      id="home"
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full">
          <p class="italic font-cursive font-bold text-orange-500">
            Speedy Delivery
          </p>

          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt=""
            />
          </div>
        </div>

        <p>
          <span className="text-orange-600 font-bold text-[3rem] lg:text-[5rem]">
            Your City's{" "}
          </span>
          <span className="text-[2.5rem] lg:text-[4.5rem] font-semibold tracking-wide text-headingColor">
            Speediest, Tastiest Food Delivery
          </span>
        </p>

        <p className="text-gray-500 md:text-left md:w-[80%]">
          With Quick Eats, you're always just moments away from your next
          delicious meal. Our app connects you with the best local eats,
          allowing you to explore, order, and savor food quickly and
          effortlessly. Get your cravings satisfied in no time!
        </p>

        <button className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100">
          Order Now
        </button>
      </div>

      <div className="py-2 relative flex-1 flex items-center justify-center ">
        <img
          src={HeroBg}
          className="ml-auto h-[420px] w-full lg:h-[650px] lg:w-auto"
          alt="Hero Background"
        />

        <div className="w-full h-full absolute top-0 left-0 flex flex-row items-center justify-center lg:px-8  py-4 lg:mt-2 gap-4 flex-wrap">
          {heroData.map((item) => (
            <div
              key={item.id}
              className="lg:w-[180px] lg:h-[200px] w-[130px] h-[160px] md:mt-6 lg:mt-6  py-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center "
            >
              <img src={item.imageSrc} className="w-20 lg:w-40 -mt-14 lg:-mt-20 bg-transparent" alt="Cake" />
              <p className="text-[12px] text-center lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                {item.name}
              </p>
              <p className="text-[12px] text-center lg:text-sm text-lighttextGray font-semibold lg:my-3 my-1">
                {item.desc}
              </p>

              <p className="text-sm font-semibold text-headingColor">
                <span className="text-xs text-red-600">₹</span> {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
