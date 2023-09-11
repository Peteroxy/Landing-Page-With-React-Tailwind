import { star } from "../assets/icons";
import { Parallax} from "react-scroll-parallax";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  
  return (
    <Parallax speed={-10}>
      <div className="flex justify-center items-center flex-col " >
          <img src={imgURL} alt="customer" className="rounded-full object-cover w-[120px] h-[120px] max-sm:mt-10" />
          <p className="mt-6 max-w-sm text-center info-text ">{feedback}</p>
          <div className="mt-3 flex justify-center items-center gap-2.5 ">
              <img src={star} width={24} height={24} alt="" className="object-contain m-0" />
              <p className="text-xl font-montserrat text-slate-gray ">({rating})</p>
          </div>
          <h3 className="mt-1 font-palanquin text-3xl text-center font-bold  dark:text-white">{customerName}</h3>
    </div>
      </Parallax>
  )
}

export default ReviewCard