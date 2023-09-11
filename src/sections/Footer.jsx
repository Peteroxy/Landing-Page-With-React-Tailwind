import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container ">
      <div className="flex justify-between items-start gap-start flex-wrap max-lg:flex-col ">
        <div className="flex flex-col items-start ">
          <a href="/"><img src={footerLogo} alt="" width={150} height={46} /></a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm  ">Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards</p>
          <div className="flex items-center gap-5 mt-8  ">
            {socialMedia.map((icon,index) => (
              <div key={icon.alt + index} className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={icon.src} alt={icon.alt} width={24} height={24} className="justify-center items-center text-center" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap:20 flex-wrap ">
          {footerLinks.map((section, index) => (
            <div key={section+ index}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6  ">{section.title}</h4>
              <ul>
                {section.links.map((link,index) => (
                  <li key={link.name + index} className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                    <a href="">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center ">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer ">
          <img src={copyrightSign} alt="copy right sign" width={20} height={20} className="rounded-full m-0  " />
          <p>Copyrights All rights Reserved</p>
        </div>
        <p className="font-montserrat cursor-pointer">terms and conditions apply</p>
      </div>
    </footer>
  )
}

export default Footer