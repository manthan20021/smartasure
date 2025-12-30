"use client"

export default function Footer(){
    return(
        <div className="h-[500px] w-full ">
            <div className="flex items-center justify-center border-b-[.1px] border-gray-600 ">
                {/* content */}
                <div className=" h-[500px]"></div>
                
                {/* list */}
                 <div className="w-full flex justify-between px-5 ">
                <ul className="h-full leading-10">
                    <li className="text-xl mb-2.5 text-gray-500">HOW IT WORKS</li>
                    <li className="font-thin text-gray-300 text-[14px]">Private Consulta on </li>
                    <li className="font-thin text-gray-300 text-[14px]" >Intelligent Design</li>
                    <li className="font-thin text-gray-300 text-[14px]" >Precision Installa on </li>
                    <li className="font-thin text-gray-300 text-[14px]" >Seamless Integra on</li>
                    <li className="font-thin text-gray-300 text-[14px]" >Ongoing Support</li>
                </ul>

                <ul className="h-full leading-10">
                    <li className="text-xl mb-2.5 text-gray-500">WHAT WE CREATE</li>
                    <li className="font-thin text-gray-300 text-[14px]">Designer Smart Switches </li>
                    <li className="font-thin text-gray-300 text-[14px]">Home Theatre Automa on </li>
                    <li className="font-thin text-gray-300 text-[14px]">Curtain & Blind Automa on </li>
                    <li className="font-thin text-gray-300 text-[14px]">Gate & Access Automa on </li>
                    <li className="font-thin text-gray-300 text-[14px]">Smart Locks & Security</li>
                    <li className="font-thin text-gray-300 text-[14px]">Unified App & Voice Control</li>
                </ul>

                <ul className="h-full leading-10">
                    <li className="text-xl mb-2.5 text-gray-500">SOCIAL-MEDIA</li>
                    <li className="font-thin text-gray-300 text-[14px]">Instagram</li>
                    <li className="font-thin text-gray-300 text-[14px]">WhatsApp</li>
                </ul>

                <ul className="h-full leading-10">
                    <li className="text-xl mb-2.5 text-gray-500">Company</li>
                    <li className="font-thin text-gray-300 text-[14px]">home</li>
                    <li className="font-thin text-gray-300 text-[14px]">about</li>
                    <li className="font-thin text-gray-300 text-[14px]">BrandPhilosophy </li>
                    <li className="font-thin text-gray-300 text-[14px]">what we creat</li>
                    <li className="font-thin text-gray-300 text-[14px]">experience</li>
                </ul>                
            </div>    
            </div>

            <div className="p-8 flex justify-between items-center">
                <p>© 2025 SmartaSure All rights reserved</p>
                <p>Developd by: <span className="border-b-[.2px] border-gray-500 text-green-600">Manthan</span></p>
            </div>
        </div>
    )
}