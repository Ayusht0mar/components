import { div } from "framer-motion/client"
import InfiniteScrollingCarousel from "../infinitescrollingcarousel/page";

const GlassMaterialNavbar = () => {
    const navLinks = [
        {
            display: "Home"
        },
        {
            display: "About"
        },
        {
            display: "Lab"
        },
        {
            display: "Resume"
        },

    ]

    return ( 
        <div className="h-[200vh] bg-neutral-800">
            <nav className="sticky top-0 z-10 pt-5">
                <ul className="flex items-center gap-6 text-sm py-5 px-6 text-white justify-center bg-neutral-800/30 backdrop-blur-lg rounded-sm w-fit mx-auto">
                    {navLinks.map((link) => (
                        <li key={link.display}>
                            {link.display}
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="text-center bg-white w-96 mx-auto">
                H
            </div>
            <div className="w-[900px] relative h-60 mx-auto">
                <InfiniteScrollingCarousel/>
            </div>
        </div>
     );
}
 
export default GlassMaterialNavbar;