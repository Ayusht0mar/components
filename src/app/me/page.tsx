import Image from "next/image";
import Navbar from "../(components)/navbar5/page";

export default function Home() {
    return (
        <div className="h-[200vh]">
            <div className="absolute h-[200vh] inset-0 min-h-fit w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">

            <div className="grid grid-cols-6 gap-4 mt-4 md:mt-8 w-[94vw] md:w-[86vw] mx-auto justify-center">
                <div className="bg-white rounded-2xl border row-span-2 col-span-6 md:col-span-5 w-full p-2 md:p-4">
                    <div className="flex flex-col h-full justify-between relative">
                        <div>
                            <h1 className="font-bold">Ayush Tomar</h1>
                            <p>India</p>
                        </div>
                        <div>
                            Hello
                        </div>
                        <p className="absolute right-2 top-2 text-[#2CCF54] bg-[#2CCF5430] py-1 px-3 rounded-full">Available for work</p>
                    </div>

                </div>
                <div className="bg-white rounded-2xl border col-span-3 md:col-span-1 w-full h-40">
                    Perviously worked at
                </div>
                <div className="bg-white rounded-2xl border w-full col-span-3 md:col-span-1 h-40">

                </div>
                <div className="bg-white col-span-6 md:col-span-3 w-full h-80 border">
                    <div  className="flex gap-2">
                        <Image
                            src=""
                            alt="logo"
                            width={32}
                            height={32}
                            className="bg-black"
                        />
                        <div>
                            <h2>Inconcise</h2>
                            <p>Building blocks for your Next project</p>
                        </div>
                    </div>
                    <Image
                        src=""
                        alt="logo"
                        width={32}
                        height={32}
                        className="bg-black"
                    />
                </div>
                <div className="bg-white col-span-6 md:col-span-3 w-full h-80 border">
                    <div  className="flex gap-2">
                        <Image
                            src=""
                            alt="logo"
                            width={32}
                            height={32}
                            className="bg-black"
                        />
                        <div>
                            <h2>Shortcuts</h2>
                            <p>Building blocks for your Next project</p>
                        </div>
                    </div>
                    <Image
                        src=""
                        alt="logo"
                        width={32}
                        height={32}
                        className="bg-black"
                    />
                </div>
                <div className="bg-white col-span-6 w-full h-80 border">
                    <div>
                        <h2>Projects</h2>
                        <p>Projects I worked on</p>
                    </div>
                    <div>
                        Projects Cards
                    </div>
                </div>
                <div className="grid col-span-6 grid-cols-4 gap-4">
                            <div className="bg-white border col-span-3 w-full h-40">
                                <div>
                                    <h2>Tech Stack</h2>
                                    <p>Projects I worked on</p>
                                </div>
                                <div>
                                    Stack card
                                </div>
                            </div>
                            <div className="bg-white border row-span-2 w-full">
                            </div>
                            <div className="bg-white border w-full h-40">
                                Social
                            </div>
                            <div className="bg-white border w-full h-40">
                                Social
                            </div>
                            <div className="bg-white border w-full h-40">
                                Social
                            </div>
                </div>
                <div className="bg-[#faf7f4] rounded-lg col-span-6 w-full h-40 shadow-sm">
                </div>
                <div className="bg-white col-span-3 w-full h-80 border">
                </div>
                <div className="bg-white col-span-3 w-full h-80 border">
                </div>
            </div>
            <Navbar/>
            </div>
        </div>
    )
}