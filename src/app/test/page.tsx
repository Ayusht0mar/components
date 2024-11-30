import Image from "next/image";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { PiXLogo } from "react-icons/pi";


export default function Home() {
  return (
        <div className="bg-[#070708] bg-opacity-10 h-full w-full">
            <div className="grid grid-flow-col grid-cols-4 h-dvh p-3 grid-rows-3 gap-3">
                <div className="bg-white rounded-xl shadow-sm p-4 space-y-4">
                    <div className="flex gap-[10px] items-center">
                        <div className="h-10 w-10">
                            <Image
                                src="/image-3.jpg"
                                alt="Ayush Tomar"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                        </div>
                        <h1 className="text-[#374044]">Ayush Tomar</h1>
                    </div>
                    <p className="text-[#6d6d6e] text-[15px]">
                        Product designer with six years in the field and a strong foundation in software engineering, spanning industries such as incorporation, insurance, banking, and education.
                    </p>
                    <hr />
                    <div className="flex justify-between">
                        <ul className="flex gap-3">
                            <li>
                                <a href="/">
                                    <FaGithub fill="#9FA0A1" size={20}/>
                                </a>
                            </li>  
                            <li>
                                <a href="/">
                                    <FaInstagram fill="#9FA0A1" size={20}/>
                                </a>
                            </li>           
                            <li>
                                <a href="/">
                                    <FaLinkedinIn fill="#9FA0A1" size={20}/>
                                </a>
                            </li> 
                            <li>
                                <a href="/">
                                    <PiXLogo fill="#9FA0A1" size={20}/>
                                </a>
                            </li>
                        </ul>
                        <p className="text-sm text-[#9FA0A1]">View Resume</p>
                    </div>
                </div>
                <div className="rounded-xl shadow-sm overflow-hidden hover:bg-black hover:z-20">
                    <div className="relative w-full max-w-sm h-full overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src="/in-concise-cover.png"
                            alt="Image"
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 via-neutral-600 to-neutral-900 transition-opacity opacity-80 duration-300 ease-in-out"></div>
                        <div className="absolute bottom-4 left-4">
                            <h2 className="text-xl font-bold text-white ">Inconcise</h2>
                            <p className="text-sm text-gray-200">Interactive, animated UI components and templates for React, Tailwind CSS, Framer Motion & more.</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-xl shadow-sm overflow-hidden hover:bg-black hover:z-20">
                    <div className="relative w-full max-w-sm h-full overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src="/adko-cover.png"
                            alt="Image"
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 via-neutral-600 to-neutral-900 transition-opacity opacity-80 duration-300 ease-in-out"></div>
                        <div className="absolute bottom-4 left-4">
                            <h2 className="text-xl font-bold text-white ">Shortcuts</h2>
                            <p className="text-sm text-gray-200">Interactive, animated UI components and templates for React, Tailwind CSS, Framer Motion & more.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white col-span-3 row-span-2 rounded-xl shadow-sm p-4 space-y-3 flex flex-col">
                    <h4 className="tracking-tight text-xl font-medium text-content-primary">Projects</h4>
                    <div className="h-full">
                        <ul className="flex h-full gap-4 overflow-x-scroll">
                            <li className="relative overflow-hidden h-full w-[400px] bg-slate-400 rounded-lg flex justify-center items-center">
                                <Image
                                    src="/image-3.jpg"
                                    alt="Project"
                                    fill
                                />
                            </li>
                            <li className="relative overflow-hidden w-[400px] bg-slate-400 rounded-lg flex justify-center items-center">
                                <Image
                                    src="/image-3.jpg"
                                    alt="Project"
                                    fill
                                />
                            </li>
                            <li className="relative overflow-hidden w-[400px] bg-slate-400 rounded-lg flex justify-center items-center">
                                <Image
                                    src="/image-3.jpg"
                                    alt="Project"
                                    fill
                                />
                            </li>
                            <li className="relative overflow-hidden w-[400px] bg-slate-400 rounded-lg flex justify-center items-center">
                                <Image
                                    src="/image-3.jpg"
                                    alt="Project"
                                    fill
                                />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-white col-span-2 rounded-xl shadow-sm space-y-4 py-4 pl-4 flex flex-col">
                    <p className="tracking-tight text-[17px] font-medium text-content-primary">Tech Stack</p>
                    <ul className="bg-[#07070810] h-full w-full flex gap-4 rounded-l-lg p-4">
                        <li className="bg-white h-24 w-24 rounded-lg shadow-md">
                            
                        </li>
                        <li className="bg-white h-24 w-24 rounded-lg shadow-md">

                        </li>
                        <li className="bg-white h-24 w-24 rounded-lg shadow-md">

                        </li>
                        <li className="bg-white h-24 w-24 rounded-lg shadow-md">

                        </li>
                        <li className="bg-white h-24 w-24 rounded-lg shadow-md">

                        </li>
                    </ul>
                </div>
                <div className="bg-white rounded-xl shadow-sm py-4 pl-4 space-y-4 flex flex-col">
                    <p className="tracking-tight text-[17px] font-medium text-content-primary">Contact</p>
                    <div className="flex flex-col gap-3 bg-[#07070810] p-3 rounded-l-lg h-full">
                        <p>To: hi@ayushtomar.in</p>
                        <p>Let's Chat</p>
                        <div className="grid grid-cols-2 gap-2 text-center">
                            <p className=" border py-2 rounded-md bg-gray-400">Email me</p>
                            <p className="border py-2 ">Copy email</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}
