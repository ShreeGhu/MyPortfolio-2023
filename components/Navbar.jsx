import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
// import { useRouter } from 'next/router';
import NavLogo from "../public/assets/sglogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#002752");
  const [linkColor, setLinkColor] = useState("");
  // const [position, setPosition] = useState('fixed')
  // const router = useRouter();

  // useEffect(() => {
  //   if (
  //     router.asPath === '/property' ||
  //     router.asPath === '/crypto' ||
  //     router.asPath === '/netflix' ||
  //     router.asPath === '/twitch'
  //   ) {
  //     setNavBg('transparent');
  //     setLinkColor('#ecf0f3');
  //   } else {
  //     setNavBg('#ecf0f3');
  //     setLinkColor('#1f2937');
  //   }
  // }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <a>
            <Image
              src={NavLogo}
              alt="/"
              width="120"
              height="75"
              className="cursor-pointer"
            />
          </a>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <li className="ml-10 text-lg uppercase hover:border-b text-white">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-lg uppercase hover:border-b text-white">
              <Link href="/#about">About</Link>
            </li>
            <li className="ml-10 text-lg uppercase hover:border-b text-white">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="ml-10 text-lg uppercase hover:border-b text-white">
              <Link href="/#projects">Projects</Link>
            </li>
            <li className="ml-10 text-lg uppercase hover:border-b text-white">
              <Link href="/#contact">Contact</Link>
            </li>
            <li className="ml-10 text-lg uppercase  hover:bg-gradient-to-r from-cyan-500 text- to-teal-500 rounded-md px-2.5 hover:text-black text-white">
              <Link href="https://drive.google.com/file/d/1QUYQhDH1I3k-bFkI3rebJtpwuZqHyPjq/view?usp=share_link">
                Resume
              </Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden "
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#002752] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <a>
                  <Image src={NavLogo} width="67" height="50" alt="/" />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg bg-gray-700 hover:shadow-gray-700 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-500 my-4">
              <p className="w-[85%] md:w-[90%] py-4 text-sm ">
                YOUR LIMITATION - IT&#39;S ONLY YOUR IMAGINATION
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
             
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
               <Link href="https://drive.google.com/file/d/1QUYQhDH1I3k-bFkI3rebJtpwuZqHyPjq/view?usp=share_link">
                <li onClick={() => setNav(false)} className="py-4 text-sm ">
                  Resume
                </li>
              </Link>
            </ul>
            <div className="pt-20">
              <p className="uppercase tracking-widest text-cyan-600 text-bold  text-xl">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/shreekant-gumanju/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full  bg-blue-800 shadow-lg shadow-blue-800 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/ShreeGhu"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg bg-[#171515] shadow-[#171515] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg bg-gradient-to-r from-cyan-600 to-blue-600 shadow-[#00ACC1] p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="https://www.instagram.com/shree_gumanju/">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg bg-gradient-to-br from-pink-600 to-yellow-600 hover:shadow-[#FF5722] p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <BsInstagram />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
