import Image from "next/image";

const InfiniteScrollingCarousel = () => {

    const logos = [
        "/image-1.jpg",
        "/image-2.jpg",
        "/image-3.jpg",
        "/image-4.jpg",
        "/image-5.jpg",
        "/image-6.jpg",
        "/image-7.jpg",
        "/image-8.jpg",
    ]

    return ( 
        <div className="py-8">
            <div className="absolute flex gap-4 ">
                {[...logos].map((item, idx) => (
                    <Card image={item} key={idx}/>
                ))}
            </div>
        </div>
     );
}

const Card = ({image} : {
    image : string;
}) => {
    return <div className="relative">
        <Image
            src={image}
            alt={image}
            height={1000}
            width={1000}
        />
    </div>
}
 
export default InfiniteScrollingCarousel;