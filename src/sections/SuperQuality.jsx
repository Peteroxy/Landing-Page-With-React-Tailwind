import { shoe8 } from "../assets/images";
import Button from "../components/Button";


const SuperQuality = () => {
  return (
    <section id="about-us" className="justify-between flex items-center max-lg:flex-col gap-10 w-full max-container ">
      <div className="flex flex-1 flex-col ">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg ">
          We Provide You
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text  dark:text-white ">Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.</p>
        
        <p className="mt-6 max-lg:max-w-lg info-text  dark:text-white">Our dedication to detail and excellence ensures your satisfaction</p>
        <div className="mt-11 ">
        <Button label="view details"/>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center  dark:text-white">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain"  />
      </div>
    </section>
  )
}

export default SuperQuality