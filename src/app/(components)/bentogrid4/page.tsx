import { PiBehanceLogo, PiDribbbleLogo, PiInstagramLogo, PiXLogo} from "react-icons/pi";


const BentoGrid = () => {
    return ( 
        <div
            className="flex h-screen mx-auto flex-col items-center justify-center p-6 bg-[#0F0F0F]"
          >
            <div className="grid h-52 grid-cols-3 gap-4">
              <div className="rounded-2xl bg-[#1A1A1A] border border-[#292929] flex flex-col gap-4 p-10">
                <div className="h-16 bg-gray-500 w-16" ></div>
                <p className="text-white text-3xl leading-normal font-semibold">Wanna <br /> work <br /> together?</p>
                <p className="text-[#525252]">Ayush Tomar • Freelance</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="rounded-2xl bg-[#1A1A1A] border border-[#292929] p-6 flex flex-col gap-1">
                  <p className="text-[#525252] text-2xl">Title</p>
                  <h1 className="text-[#f1f1f1] text-2xl">Web Developer</h1>
                </div>
                <div className="flex gap-3">
                  <div className="rounded-2xl bg-[#1A1A1A] border border-[#292929] p-6"><PiXLogo size={32} className="fill-[#858585]" /></div>
                  <div className="rounded-2xl bg-[#1A1A1A] border border-[#292929] p-6"><PiInstagramLogo size={32} className="fill-[#858585]" /></div>
                  <div className="rounded-2xl bg-[#1A1A1A] border border-[#292929] p-6"><PiDribbbleLogo size={32} className="fill-[#858585]" /></div>
                  <div className="rounded-2xl bg-[#1A1A1A] border border-[#292929] p-6"><PiBehanceLogo size={32} className="fill-[#858585]" /></div>
                </div>
                <div className="rounded-2xl bg-[#1A1A1A] border border-[#292929] p-6">
                  <p className="text-[#525252] text-2xl">Title</p>
                  <h1 className="text-[#f1f1f1] text-2xl">Web Developer</h1>
                </div>
              </div>
              <div className="rounded-2xl bg-[#1A1A1A] border border-[#292929] flex flex-col gap-6 justify-center items-center">
                  <div className="h-16 bg-gray-500 w-16" ></div>
                  <p className="text-white text-3xl text-center leading-normal font-semibold">Wanna work <br /> together?</p>
                  <button className="bg-[#0071e3] text-white py-3 px-6 rounded-full text-2xl" >hi@ayushtomar.in</button>
              </div>
            </div>
          </div> 
     );
}
 
export default BentoGrid;