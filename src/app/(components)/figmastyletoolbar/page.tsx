import { Frame, MessageSquare, MousePointer2, PenTool, Sparkles, Square, Type } from "lucide-react";

const FigmaStyleToolbar = () => {
    return ( 
        <div className="bg-slate-400 min-h-screen flex justify-center items-center">
            <div className="px-3 py-2 bg-neutral-50 rounded-md flex gap-3 items-center shadow-md overflow-hidden">
                <div className="flex gap-6 items-center">
                    <MousePointer2/>
                    <Frame/>
                    <Square/>
                    <PenTool/>
                    <Type/>
                    <MessageSquare/>
                    <Sparkles/>
                </div>
                <div className="w-0.5 self-stretch bg-neutral-200 -my-2 "/>
            </div>
        </div>
     );
}
 
export default FigmaStyleToolbar;