"use client"

import { GripVertical } from "lucide-react"
import Image from "next/image"
import * as ResizablePrimitive from "react-resizable-panels"


interface CompareImagesProps {
    containerClassName? : string
}

const CompareImages = (
    {containerClassName}: CompareImagesProps
) => {
    return ( 
        <div className="h-96 aspect-video">
            <ResizablePrimitive.PanelGroup direction="horizontal" className="w-96 mx-auto">
                <ResizablePrimitive.Panel className="bg-blue-400 overflow-hidden relative" defaultSize={50}>
                        <Image
                            src="/airbnb-cover.png"
                            alt="Image"
                            fill
                            style={{objectFit: "cover", objectPosition: "left"}}
                            className="absolute"
                        />
                </ResizablePrimitive.Panel>
                <ResizablePrimitive.PanelResizeHandle className="relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90">
                    <div className="z-10 absolute flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
                        <GripVertical className="h-2.5 w-2.5" />
                    </div>  
                </ResizablePrimitive.PanelResizeHandle>
                <ResizablePrimitive.Panel className="bg-black overflow-hidden relative" defaultSize={50}>
                <Image
                        src="/miro-cover.png"
                        alt="Image"
                        fill
                        style={{objectFit: "cover", objectPosition: "right"}}	
                    />
                </ResizablePrimitive.Panel>
            </ResizablePrimitive.PanelGroup>    
        </div>
     );
}
 
export default CompareImages;