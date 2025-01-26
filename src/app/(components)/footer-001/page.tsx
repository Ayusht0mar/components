import Image from "next/image";
import { FaLinkedin, FaSlack, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Team from "./team";

const Footer = () => {
    return ( 
        <div className="bg-[#f1f0ee] mt-32">
            <div className="mx-auto w-[84vw] py-10 flex max-w-screen-2xl justify-between">
                <div className="flex flex-col gap-8">
                    <Image
                        src="/logoipsum.svg"
                        alt="Logo"
                        width={144}
                        height={40}

                    />
                    <p className="text-[#686868] text-sm">  &copy; 2025 Logoipsum. All rights reserved.</p>
                </div>
                <div className="flex flex-col items-end gap-6">

                    <Team/>
                    
                    <div className="flex divide-x divide-[#68686875]">
                        <a href="" className="text-[#686868] text-sm px-2">Join Our Community</a>
                        <a href="" className="px-2">
                            <FaSlack size={20}/>
                        </a>
                        <a href="" className="px-2">
                            <FaLinkedin size={20} />
                        </a>
                        <a href="" className="px-2">
                            <FaYoutube size={20}/>
                        </a>
                        <a href="" className="px-2">
                            <FaXTwitter size={20}/>
                        </a>
                    </div> 
                </div>
            </div>
        </div>
     );
}
 
export default Footer;