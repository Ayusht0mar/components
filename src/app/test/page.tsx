import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";


export default function Home() {
  return (
        <div className="bg-[#070708] bg-opacity-10 h-full w-full">
            <div className="grid grid-flow-col grid-cols-4 h-dvh p-3 grid-rows-3 gap-3">
                <div className="bg-white rounded-xl shadow-sm p-4 space-y-4">
                    <div className="flex gap-[10px]">
                        <Image
                            src="/image-3.jpg"
                            alt="Ayush Tomar"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <h1 className="text-[#374044]">Ayush Tomar</h1>
                    </div>
                    <p className="text-[#6d6d6e] text-[15px]">
                        Product designer with six years in the field and a strong foundation in software engineering, spanning industries such as incorporation, insurance, banking, and education.
                    </p>
                    <hr />
                    <div className="flex justify-between">
                        <ul className="flex gap-2">
                            <li><FaGithub fill="#9FA0A1"/></li>
                            <li><FaInstagram fill="#9FA0A1"/></li>
                        </ul>
                        <p>Resume</p>
                    </div>
                </div>
                <div className="rounded-xl shadow-sm overflow-hidden hover:bg-black hover:z-20">
                    <div className="relative w-full max-w-sm h-full overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src="/image-3.jpg"
                            alt="Image"
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <div className="absolute inset-0  bg-black opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-50"></div>
                        <div className="absolute bottom-4 left-4">
                            <h2 className="text-xl font-bold text-white ">Inconcise</h2>
                            <p className="text-sm text-gray-200">Interactive, animated UI components and templates for React, Tailwind CSS, Framer Motion & more.</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-xl shadow-sm overflow-hidden hover:bg-black hover:z-20">
                    <div className="relative w-full max-w-sm h-full overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src="/image-3.jpg"
                            alt="Image"
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-50"></div>
                        <div className="absolute bottom-4 left-4">
                            <h2 className="text-xl font-bold text-white ">Shortcuts</h2>
                            <p className="text-sm text-gray-200">Interactive, animated UI components and templates for React, Tailwind CSS, Framer Motion & more.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white col-span-3 row-span-2 rounded-xl shadow-sm p-4 space-y-3 flex flex-col">
                    <h4 className="tracking-tight text-xl font-medium text-content-primary">Projects</h4>
                    <div className="h-full">
                        <ul className="flex h-full gap-4 ">
                            <li className="relative overflow-hidden h-full w-[400px] min-w-[160px] bg-slate-400 rounded-lg flex justify-center items-center">
                                <Image
                                    src="/image-3.jpg"
                                    alt="Project"
                                    fill
                                />
                            </li>
                            <li className="relative overflow-hidden w-[400px] min-w-[160px] bg-slate-400 rounded-lg flex justify-center items-center">
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
                    <ul className="bg-[#07070810] h-full w-full rounded-l-lg">
                        <li className="">Hello</li>
                    </ul>
                </div>
                <div className="bg-white rounded-xl shadow-sm">
                    Social
                </div>
            </div>
        </div>
  );
}
