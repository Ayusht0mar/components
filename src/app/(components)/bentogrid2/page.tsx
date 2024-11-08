const BentoGrid = () => {
    return ( 
        <div
            className="flex h-screen w-[60vw] mx-auto flex-col items-center justify-center rounded-lg p-6 dark:bg-slate-900"
          >
            <div className="grid h-full w-full grid-cols-4 grid-rows-4 gap-4">
              <div className="rounded-3xl bg-orange-400"></div>
              <div className="col-span-2 rounded-3xl bg-orange-400"></div>
              <div className="rounded-3xl bg-orange-400"></div>
              <div className="col-span-2 rounded-3xl bg-orange-400"></div>
              <div className="col-span-2 rounded-3xl bg-orange-400"></div>
              <div className="rounded-3xl bg-orange-400"></div>
              <div className="rounded-3xl bg-orange-400"></div>
              <div className="col-span-2 rounded-3xl bg-orange-400"></div>
            </div>
          </div> 
     );
}
 
export default BentoGrid;