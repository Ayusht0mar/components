import Navbar from "../(components)/navbar5/page";

export default function Home() {
    return (
        <div className="h-[200vh]">
            <div className="absolute h-[200vh] inset-0 min-h-fit w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">

            <div className="grid grid-cols-6 gap-4 mt-8 w-[86vw] mx-auto justify-center">
                <div className="bg-white rounded-2xl border row-span-2 col-span-5 w-full">
                </div>
                <div className="bg-white rounded-2xl border w-full h-40">
                </div>
                <div className="bg-white rounded-2xl border w-full h-40">
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