import Button from "../components/Button";
import {arrowRight} from '../assets/icons'
import {shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";


const Hero = () => {
  const[bigShoeImg,setBigShoeImg] = useState(bigShoe1)
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10  max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red max-sm:hidden  dark:text-white">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[20px] max-sm:leading-[20px] font-bold max-lg:text-[55px] dark:text-3xl">
          <span className="xl:bg-white xl:whitespace-nowrap relative  pr-10  dark:text-white dark:xl:bg-black  max-sm:mt-10 z-10  ">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3 ">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm max-sm:mt-14   dark:text-white">Discover Stylish Nike Arrivals, Quality Comfort And Innovation For Your active Life</p>
        <Button label="Shop Now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat,index) => (
            <div key={stat.label + index}>
              <p className="text-4xl font-palanquin font-bold  dark:text-white">{ stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray  dark:text-white">{ stat.label}</p>
            </div>
          ))}
        </div> 
      </div>
      <div className="flex-1 relative justify-center flex items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center  dark:bg-black ">
        <img src={bigShoeImg} alt="shoe collection" width={610} height={500} className="object-contain relative  cursor-pointer  " />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe,index) => (
            <div  key={index}>
               <ShoeCard imgURL={shoe} changeBigShoeImage={(shoe)=>setBigShoeImg(shoe)} bigShoeImg={bigShoeImg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero