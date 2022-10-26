import React, { useState } from "react";
import { GrCheckmark } from "react-icons/gr";
import AmountPrice from "./AmountPrice";
const AddToCart = ({ colors }) => {
  const [mainColor, setMainColor] = useState(colors[0]);
  return (
    <div>
      <div className="flex items-center mb-5">
        <span className="w-3/12 text-xl font-bold capitalize">
          colors :
        </span>
        {colors.map((ele, index) => {
          return (
            <button
              key={index}
              className="w-6 h-6 rounded-full mr-2 cursor-pointer flex justify-center items-center opacity-70 text-white"
              style={mainColor !== ele ? { backgroundColor: ele, opacity: 0.5} : { backgroundColor: ele}}
              onClick={() => setMainColor(ele)}
            >
              {mainColor == ele ? <span>
                <GrCheckmark value={{ color: 'blue', size: '50px' }}/>
              </span> : null}
            </button>
          );
        })}
      </div>
        <AmountPrice color={mainColor}/>
    </div>
  );
};

export default AddToCart;
