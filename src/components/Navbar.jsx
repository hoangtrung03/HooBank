import React from 'react'
import { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants/index'
import { useTranslation } from 'react-i18next'
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const { t, i18n } = useTranslation()
  const [language, setLanguage] = useState('Eng')
  const lngs = {
    en: { nativeName: 'Eng' },
    vi: { nativeName: 'Vie' }
  }
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <a href="/">
        <img
          src={logo}
          alt="hoobank"
          title="hoobank"
          className="w-[124px] h-[32px]"
        />
      </a>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            } text-white hover-text`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] text-white ml-10`}
        >
          <div className="dropdown inline-block relative">
            <button className="rounded inline-flex items-center hover-text">
              <span className="mr-1">{language}</span>
              <svg
                className="fill-current h-4 w-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
              </svg>
            </button>
            <ul className="dropdown-menu absolute hidden p-5 rounded bg-discount-gradient">
              <li
                className="hover-text"
                onClick={() => {
                  i18n.changeLanguage('en')
                  setLanguage(lngs.en.nativeName)
                }}
              >
                <a
                  className="rounded-t py-2 px-4 block whitespace-no-wrap text-white"
                  href="#"
                >
                  {lngs.en.nativeName}
                </a>
              </li>
              <li
                className="hover-text"
                onClick={() => {
                  i18n.changeLanguage('vi')
                  setLanguage(lngs.vi.nativeName)
                }}
              >
                <a
                  className="py-2 px-4 block whitespace-no-wrap text-white"
                  href="#"
                >
                  {lngs.vi.nativeName}
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          title="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(prev => !prev)}
        />
        <div
          className={`${
            toggle ? 'flex' : ''
          } p-6 bg-black-gradient absolute top-20 right-0 my-2 min-w-[200px] min-h-[50%] justify-start items-start ${
            toggle ? 'sidebar' : 'close'
          } `}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                } text-white hover-text`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
