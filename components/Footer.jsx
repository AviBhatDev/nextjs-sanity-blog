import React from 'react';
import { FooterBg } from '../public/bg.svg';

function Footer() {
  return (
    <footer>
        <div className="relative px-5 md:px-10 gap-10 gap-y-16 p-24 border-4 border-black rounded-3xl mr-5 ml-5 bg-[#F16363]">
            <h1 className="font-bold text-2xl text-center">STAY IN THE LOOP</h1>
            <p className="font-medium text-center">Get the latest posts delivered right to your mail.</p>
            <form className="relative flex items-center justify-center mt-5 md:w-[500px] mx-auto">
                <input type="email" className="relative rounded-3xl border-4 border-black pr-5 pl-5 pt-3 pb-3 md:min-w-[500px]" />
                <button type="button" className="font-semibold pr-5 pl-5 pt-3 pb-3 rounded-3xl border-4 border-black absolute right-0 bg-[#FFCC00]">SUBSCRIBE</button>
            </form>
        </div>
        <div className="flex items-center justify-center mt-5">
            <p className="text-xl font-semibold">© 2023 AvianDev, All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer