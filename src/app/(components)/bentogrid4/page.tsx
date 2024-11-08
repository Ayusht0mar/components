const BentoGrid = () => {
    return ( 
        <div
            className="flex h-screen w-[60vw] mx-auto flex-col items-center justify-center rounded-lg p-6 dark:bg-slate-900"
          >
            <div className="grid h-52 w-full grid-cols-3 gap-4">
              <div className="rounded-2xl bg-orange-400"></div>
              <div className="grid grid-cols-4 grid-rows-3 gap-2">
                <div className="col-span-4 rounded-2xl bg-orange-400"></div>
                <div className="rounded-2xl bg-orange-400"></div>
                <div className="rounded-2xl bg-orange-400"></div>
                <div className="rounded-2xl bg-orange-400"></div>
                <div className="rounded-2xl bg-orange-400"></div>
                <div className="col-span-4 rounded-2xl bg-orange-400"></div>
              </div>
              <div className="rounded-2xl bg-orange-400"></div>
            </div>
          </div> 
     );
}
 
export default BentoGrid;