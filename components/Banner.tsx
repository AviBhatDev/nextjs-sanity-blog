

function Banner() {
  return (
   <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold py-5 px-5 mb-10 md:px-10">
        <div>
            <h1 className="text-4xl mb-3 md:text-7xl">Avi's Daily Blog</h1>
            <h2 className="mt-5 md:mt-0">Welcome to {" "} <span className="underline decoration-4 decoration-[#F7AB0A]">Every Developers</span>{" "} favorite blog in the Devosphere</h2>
        </div>
        <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
            New Product features | The latest in technology | The weekly debugging nightmares & More!
        </p>
   </div>
  )
}

export default Banner