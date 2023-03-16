import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsInstagram } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/ai.png';

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="uppercase text-xl tracking-widest text-cyan-500 text-3xl text-bold pb-4 ">
          Contact
        </p>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-lg shadow-black rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="hover:scale-95 ease-out duration-300"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Shreekant Gumanju</h2>
                <p>Full-Stack Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/shreekant-gumanju/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full bg-blue-800 shadow-lg hover:shadow-blue-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/ShreeGhu"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg bg-[#171515] hover:shadow-[#171515] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                  <Link href="/#contact">
                    <div className="rounded-full shadow-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:shadow-[#00ACC1] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                  </Link>
                  <Link href="https://www.instagram.com/shree_gumanju/">
                    <div className="rounded-full shadow-lg bg-gradient-to-br from-pink-600 to-yellow-600 hover:shadow-[#FF5722] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsInstagram />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-lg text-white shadow-black rounded-xl lg:p-4">
            <div className="p-4 ">
              <form
                action="https://getform.io/f/534d8262-56bb-4f10-950b-78e6b3b77503"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 text-white">
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex text-black border-gray-300 bg-gray-200"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex text-black border-gray-300 bg-gray-200"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3  text-black flex border-gray-300 bg-gray-200"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3  text-black flex border-gray-300 bg-gray-200"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 text-black border-gray-300 bg-gray-200"
                    rows="10"
                    name="message"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Say Hello
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <a>
              <div className="rounded-full bg-gray-400 shadow-lg hover:shadow-gray-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp className="text-black " size={30} />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
