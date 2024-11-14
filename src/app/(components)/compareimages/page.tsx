interface CompareImagesProps {
    containerClassName? : string
}

const CompareImages = (
    {containerClassName}: CompareImagesProps
) => {
    return ( 
        <div className=" grid place-content-center h-screen">
            <div className={`bg-black relative flex justify-center ${containerClassName}`}>
                <h2 className="text-white">Image 1</h2>
                <button className="absolute w-1 h-full top-0 bg-slate-500 overflow-hidden">Button</button>
                <h2 className="text-white">Image 2</h2>
            </div>
        </div>
     );
}
 
export default CompareImages;