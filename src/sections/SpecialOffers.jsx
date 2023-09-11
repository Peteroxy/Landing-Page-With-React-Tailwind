import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { Parallax, useParallax } from "react-scroll-parallax";

const SpecialOffers = () => {
  const cat = useParallax({scale: [.7, 1, "easeInQuad"],});
  return (
    <Parallax>
      <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container " ref={cat.ref}>
      <div className="flex-1 ">
        <img src={offer} alt="" width={773} height={668} className="object-contain w-full " />
      </div>
      <div className="flex flex-1 flex-col ">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg ">
          <span className="text-coral-red  dark:text-white"> Special </span>
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text  dark:text-white ">Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.</p>
        
        <p className="mt-6 max-lg:max-w-lg info-text  dark:text-white ">Our dedication to detail and excellence ensures your satisfaction</p>
        <div className="mt-11 flex flex-wrap gap-4 ">
          <Button label="shop now" iconUrl={arrowRight} />
          <Button label="view details" backgroundColor="bg-black" borderColor="border-slate-gray"  className=" dark:text-black text-black " />
        </div>
      </div>
    </section>
    </Parallax>
  )
}

export default SpecialOffers