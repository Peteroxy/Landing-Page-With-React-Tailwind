import { headerLogo } from '../assets/images';
// import { hamburger } from '../assets/icons';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import { navLinks } from '../constants';
import { useEffect, useState } from 'react';
import {BsFillMoonFill} from "react-icons/bs";
import {CiLight} from "react-icons/ci";


const Nav = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [toggleDark, setToggleDark] = useState(false)
    useEffect(() => {
        document.documentElement.classList.toggle('dark')
    },[toggleDark])
  return (
      <header className='padding-x py-8 absolute z-50 w-full dark:bg-black '>
          <nav className='flex justify-between items-center max-container '>
              <a href="/">
                  <img src={headerLogo} alt="logo" width={130} height={29} />
              </a>
              <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                  {navLinks.map((item,index) => (
                      <li key={item.label + index} ><a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray  dark:text-white'>{item.label}</a></li>
                  ))}
              </ul>
              <div className='flex ml-5 mr-7  leading-3 '>
                  <h6 className='pr-5 flex font-montserrat  text-black dark:text-white max-sm:hidden'>Toggle Mode</h6>
                  <div>
                      {toggleDark
                          ? <CiLight onClick={() => setToggleDark(false)} className='dark:text-white' />
                          :
                          <BsFillMoonFill onClick={()=>setToggleDark(true)} />
                      }
                  </div>
              </div>
              <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat  wide:mr-24 max-sm:hidden'>
                    <a href='/'>Sign in</a>
                    {/* <span>/</span>
                    <a href='/'>Explore now</a> */}
              </div>
              <div className='hidden max-lg:block  z-50'>
                  {toggleMenu
                    ? <RiCloseLine  size={27} onClick={() => setToggleMenu(false)}  />
                    :
                    <RiMenu3Line size={27} onClick={() => setToggleMenu(true)} />
                  }
                  {
                        toggleMenu && (
                            <div className='flex justify-end items-end flex-col p-2 absolute top-[70px] right-[0] min-w-[210px] rounded-[5px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-white : scale-up-center dark:text-white dark:bg-black z-50'>
                            <div className=''>
                            {navLinks.map((item) => (
                                <li key={item.label} className='list-none p-1'><a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray p-2   dark:text-white dark:z-10 z-10'>{item.label}</a></li>
                            ))}
                               <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat wide:mr-24 max-lg:hidden max-sm:block max-sm:text-[15px]'>
                                <a href='/'>Sign in</a>
                                <span>/</span>
                                <a href='/'>Explore now</a>
                              </div>
                            </div>
                            </div>
                        )
                    }
              </div>
          </nav>
    </header>
  )
}

export default Nav