import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const team = [
    {
        memberImgSrc: "/team-img.jpg",
        memberName: "Ayush Tomar",
        memberDesignation: "Founder",
        memberLinkedin: "https://linkedin.com/in/ayush-tomar",
        memberX: "https://twitter.com/ayush-tomar",
    },
    {
        memberImgSrc: "/team-img.jpg",
        memberName: "Ayush Tomar",
        memberDesignation: "Founder",
        memberLinkedin: "https://linkedin.com/in/ayush-tomar",
        memberX: "https://twitter.com/ayush-tomar",
    },
    {
        memberImgSrc: "/team-img.jpg",
        memberName: "Ayush Tomar",
        memberDesignation: "Founder",
        memberLinkedin: "",
        memberX: "https://twitter.com/ayush-tomar",
    },
    {
        memberImgSrc: "/team-img.jpg",
        memberName: "Ayush Tomar",
        memberDesignation: "Founder",
        memberLinkedin: "",
        memberX: "https://twitter.com/ayush-tomar",
    },

];

const Team = () => {
    return (
        <div className="flex">
            {team.map((member) => (
                <div className="relative group" key={member.memberImgSrc}>
                    <div
                        className="transition-transform transform group-hover:translate-x-[-4px] duration-200 ease-in-out -mx-0.5 border-2 rounded-full overflow-hidden"
                    >
                        <Image src={member.memberImgSrc} alt={member.memberName} width={40} height={40} />
                    </div>
                    <div className="group-hover:flex gap-4 justify-between min-w-60 hidden absolute bg-[#1d1d1d] -top-24 -right-4 p-3 rounded-lg">
                        <div className="absolute -bottom-2 right-8 bg-[#1d1d1d] rounded-full h-4 w-4">
                        </div>
                        <div className="text-white space-y-2">
                            <p className="text-nowrap">{member.memberName}</p>
                            <p className="text-nowrap">{member.memberDesignation}</p>
                        </div>

                        <div className="flex gap-2 text-white">
                            {member.memberLinkedin && (
                                <a href={member.memberLinkedin} target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin size={20} />
                                </a>
                            )}
                            {member.memberX && (
                                <a href={member.memberX} target="_blank" rel="noopener noreferrer">
                                    <FaXTwitter size={20} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Team;
