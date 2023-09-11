import { star } from "../assets/icons";
import { Parallax } from 'react-scroll-parallax';
import { useParallax } from "react-scroll-parallax";

const PopularProductCard = ({ imgURL, name, price }) => {
    const cat = useParallax({scale: [0.6, 1, "easeInQuad"],});
  return (
      <Parallax >
          <div className="flex flex-1 flex-col w-full max-sm:w-full " ref={cat.ref}>
          <img src={imgURL} alt={name} className='w-[280px] h-[280px] ' />
          <div className="mt-8 flex justify-start gap-2.5 ">
              <img src={star} alt="rating" width={24} height={24} />
              <p className="font-montserrat text-xl leading-normal text-slate-gray  dark:text-white">(4.5)</p>
          </div>
          <h3 className='mt-2 text-xl leading-normal font-semibold font-palanquin  ' >{name}</h3>
          <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal  dark:text-white">{price}</p>
      </div>
      </Parallax>
  )
}

export default PopularProductCard